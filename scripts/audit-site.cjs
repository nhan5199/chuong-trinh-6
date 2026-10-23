// Read-only smoke audit of static Angular routes against a running local preview.
const fs = require('node:fs');
const ts = require('typescript');
const { chromium } = require('@playwright/test');

async function main() {
  const source = ts.createSourceFile('routes.ts', fs.readFileSync('src/app/app-routing.module.ts', 'utf8'), ts.ScriptTarget.Latest, true);
  let config;
  function find(node) {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === 'routes') config = node.initializer;
    ts.forEachChild(node, find);
  }
  find(source);
  const routes = [];
  function collect(array, prefix = '') {
    for (const object of array.elements) {
      const props = Object.fromEntries(object.properties.filter(ts.isPropertyAssignment).map(p => [p.name.getText(source), p.initializer]));
      if (props.path?.text === undefined || props.path.text === '**') continue;
      const route = `${prefix}/${props.path.text}`.replace(/\/+/g, '/');
      if (props.component && !route.includes(':')) routes.push(route);
      if (props.children && ts.isArrayLiteralExpression(props.children)) collect(props.children, route);
    }
  }
  collect(config);
  const browser = await chromium.launch({ channel: 'chrome' });
  const results = [];
  try {
    const mobile = process.env.SITE_VIEWPORT === 'mobile';
    const page = await browser.newPage({ viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 }, reducedMotion: 'reduce' });
    let errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of routes) {
      errors = [];
      await page.goto(`${process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:4200'}${route}`, { waitUntil: 'domcontentloaded' });
      // Routed hosts can be inline with absolutely positioned, visible children.
      await page.locator('app-root .body > .content > :not(router-outlet)').first().waitFor({ state: 'attached' });
      const first = page.locator('img[src]').first();
      if (await first.count()) await first.evaluate(image => image.decode().catch(() => {}));
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - innerWidth,
        failedImages: [...document.querySelectorAll('img.media-error')].map(image => image.dataset.mediaSrc || image.src),
        bookImages: document.querySelectorAll('.book img').length,
        requestedBookImages: document.querySelectorAll('.book img[src]').length,
        unsizedImages: [...document.querySelectorAll('img[data-media-src]')].filter(image => !image.hasAttribute('width') || !image.hasAttribute('height')).map(image => image.dataset.mediaSrc),
      }));
      results.push({ route, ...result, errors: [...errors] });
    }
  } finally { await browser.close(); }
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync(`reports/site-display-audit${process.env.SITE_VIEWPORT === 'mobile' ? '-mobile' : ''}.json`, JSON.stringify(results, null, 2) + '\n');
  const issues = results.filter(result => result.overflow > 1 || result.errors.length || result.failedImages.length || (result.bookImages && !result.requestedBookImages));
  console.log(JSON.stringify({ routes: results.length, issues }, null, 2));
  if (issues.length) process.exitCode = 1;
}
main().catch(error => { console.error(error); process.exitCode = 1; });
