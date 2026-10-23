const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const routeFile = path.join(root, 'src/app/app-routing.module.ts');
const source = fs.readFileSync(routeFile, 'utf8').replace(/^\s*\/\/.*$/gm, '');
const imports = new Map([...source.matchAll(/import\s*\{\s*(\w+)\s*\}\s*from\s*['"]([^'"]+)['"]/g)]
  .map(match => [match[1], path.resolve(path.dirname(routeFile), match[2] + '.html')]));
const routes = [];
for (const match of source.matchAll(/path:\s*['"]([^'"]*)['"],\s*component:\s*(\w+)/g)) {
  const html = imports.get(match[2]);
  if (html && fs.existsSync(html) && fs.readFileSync(html, 'utf8').includes('class="book"')) routes.push('/' + match[1]);
}

async function settle(page) {
  await page.evaluate(async () => {
    const images = document.querySelector('.book')
      ? [...document.querySelectorAll('.book img[src]')]
      : [...document.querySelectorAll('.picture-content img[src]')].slice(0, 1);
    await Promise.race([Promise.all(images.map(image => image.decode().catch(() => {}))), new Promise(resolve => setTimeout(resolve, 5000))]);
    await document.fonts.ready;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.waitForFunction(() => {
    const images = document.querySelector('.book')
      ? [...document.querySelectorAll('.book img[src]')]
      : [...document.querySelectorAll('.picture-content img[src]')].slice(0, 1);
    return images.every(image => !image.classList.contains('media-loading'));
  });
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

async function capture(page) {
  return page.evaluate(() => {
    const selectors = { contain: '.contain', book: '.book', spread: '.flip-book', front: '#p1 .front', back: '#p1 .back', next: '#p1 .next-btn', backArrow: '.contain > .return a, .contain > .back a, .contain > a.return', lessonImage: '.picture-content img' };
    const result = {};
    const round = value => Math.round(value * 100) / 100;
    for (const [name, selector] of Object.entries(selectors)) {
      const node = document.querySelector(selector);
      if (!node) { result[name] = null; continue; }
      const rect = node.getBoundingClientRect(), style = getComputedStyle(node);
      result[name] = { width: round(rect.width), height: round(rect.height), left: round(rect.left), top: round(rect.top), display: style.display, position: style.position, transform: style.transform, backgroundColor: style.backgroundColor, borderRadius: style.borderRadius, fontSize: style.fontSize, perspective: style.perspective, backfaceVisibility: style.backfaceVisibility };
    }
    return result;
  });
}

async function main() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const viewports = [{ width: 1440, height: 900 }, { width: 390, height: 844 }, { width: 844, height: 390 }];
  const result = { routes, viewports, records: [] };
  try {
    await Promise.all(viewports.map(async viewport => {
      const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
      const page = await context.newPage();
      for (const route of routes) {
        await page.goto((process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:4200') + route);
        await page.locator('.book').waitFor();
        await settle(page);
        result.records.push({ viewport, route, state: 'closed', styles: await capture(page) });
        await page.locator('#p1 .next-btn').click();
        await settle(page);
        result.records.push({ viewport, route, state: 'first-open', styles: await capture(page) });
      }
      console.log(`Books complete ${viewport.width}x${viewport.height}`);
      for (const route of ['/daikiniem_canva', '/lehoi']) {
        await page.goto((process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:4200') + route);
        await settle(page);
        result.records.push({ viewport, route, state: 'lesson', styles: await capture(page) });
      }
      await context.close();
    }));
    result.records.sort((a, b) => a.viewport.width - b.viewport.width || a.route.localeCompare(b.route) || a.state.localeCompare(b.state));
    const output = path.resolve(root, process.argv[2] || 'test-results/css-layout.json');
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
    console.log(`Saved ${result.records.length} records to ${output}`);
  } finally { await browser.close(); }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
