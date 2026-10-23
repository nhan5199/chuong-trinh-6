const { test, expect } = require('@playwright/test');
const { matchesAsset } = require('./media-helpers.cjs');

test('books show a skeleton during slow image loads and recover after errors', async ({ page }, testInfo) => {
  let release;
  const pending = new Promise(resolve => { release = resolve; });
  await page.route('**/assets/**', async route => {
    if (matchesAsset(route.request().url(), 'assets/dong-nam-a/vietnam/1.png')) await pending;
    await route.continue();
  });
  await page.goto('/em-yeu-dia-li/vietnam', { waitUntil: 'domcontentloaded' });
  const cover = page.locator('#p1 .front img');
  await expect(cover).toHaveAttribute('aria-busy', 'true');
  await expect(cover).toHaveCSS('visibility', 'hidden');
  const skeleton = await page.locator('#p1 .front').evaluate(node => {
    const style = getComputedStyle(node, '::after');
    return { content: style.content, background: style.backgroundImage };
  });
  expect(skeleton.content).toBe('""');
  expect(skeleton.background).toContain('linear-gradient');
  const reservedPage = await page.locator('#p1 .front').boundingBox();
  await page.screenshot({ path: testInfo.outputPath('book-skeleton.png'), animations: 'disabled' });
  release();
  await expect(cover).not.toHaveClass(/media-loading/);
  await expect(cover).toHaveCSS('visibility', 'visible');
  await expect(cover).not.toHaveAttribute('aria-busy');
  const loadedPage = await page.locator('#p1 .front').boundingBox();
  expect(Math.abs(loadedPage.width - reservedPage.width)).toBeLessThan(1);
  expect(Math.abs(loadedPage.height - reservedPage.height)).toBeLessThan(1);
  await page.route('**/missing-page.png', route => route.abort());
  await cover.evaluate(image => { image.removeAttribute('srcset'); image.src = '/missing-page.png'; });
  await expect(cover).toHaveClass(/media-error/);
  await expect(cover).not.toHaveClass(/media-loading/);
  await cover.evaluate(image => { image.src = '/assets/dong-nam-a/vietnam/1.png'; });
  await expect(cover).not.toHaveClass(/media-error|media-loading/);
  await expect(cover).toHaveCSS('visibility', 'visible');
});

test('menu images preserve proportions and long pages scroll back to top', async ({ page }) => {
  for (const route of ['/lichsu', '/dialy', '/gioithieuchung']) {
    await page.goto(route);
    await page.locator('.item img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
    const sizes = await page.locator('.item').evaluateAll(items => items.map(item => {
      const image = item.querySelector('img');
      const box = image.getBoundingClientRect();
      return { actual: box.width / box.height, natural: image.naturalWidth / image.naturalHeight,
        width: box.width, label: item.querySelector('button').getBoundingClientRect().width };
    }));
    for (const size of sizes) {
      if (route === '/dialy') expect(Math.abs(size.actual - 1)).toBeLessThan(.01);
      else expect(Math.abs(size.actual - size.natural)).toBeLessThan(.01);
      expect(Math.abs(size.width - size.label)).toBeLessThan(1);
    }
  }
  await page.goto('/lehoi');
  await page.locator('.picture-content img').first().evaluate(image => image.decode());
  await expect(page.locator('.scroll-top')).toHaveCount(0);
  await page.evaluate(() => window.scrollTo(0, 650));
  await expect(page.locator('.scroll-top')).toBeVisible();
  await page.locator('.scroll-top').click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator('.scroll-top')).toHaveCount(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.evaluate(() => window.scrollTo(0, 650));
  await page.locator('.scroll-top').click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});

test('reported menu, canvas and comic layouts fit their content', async ({ page }, testInfo) => {
  await page.goto('/gioithieuchung');
  await expect(page.locator('.overview')).toHaveCount(0);
  const cards = await page.locator('.gioi-thieu-container .item').evaluateAll(nodes => nodes.map(node => {
    const image = node.querySelector('img').getBoundingClientRect();
    const button = node.querySelector('button').getBoundingClientRect();
    return { imageWidth: image.width, buttonWidth: button.width, bottom: image.bottom, buttonTop: button.top };
  }));
  for (const card of cards) {
    expect(Math.abs(card.imageWidth - card.buttonWidth)).toBeLessThan(1);
    expect(card.buttonTop).toBeGreaterThanOrEqual(card.bottom);
  }
  await page.screenshot({ path: testInfo.outputPath('intro-menu.png'), fullPage: true, animations: 'disabled' });
  await page.goto('/daikiniem_canva');
  const layout = await page.locator('.contain').evaluate(node => ({
    top: node.getBoundingClientRect().top,
    menuBottom: document.querySelector('app-menu').getBoundingClientRect().bottom,
    imageTop: node.querySelector('img').getBoundingClientRect().top,
  }));
  expect(Math.abs(layout.top - layout.menuBottom)).toBeLessThan(1);
  expect(layout.imageTop - layout.top).toBeGreaterThanOrEqual(20);
  await page.screenshot({ path: testInfo.outputPath('canvas.png'), animations: 'disabled' });
  await page.goto('/tranthuongxuyen_comic');
  await expect(page.locator('.book img').first()).toHaveJSProperty('complete', true);
  const cover = await page.locator('.book .front').first().boundingBox();
  const viewport = page.viewportSize();
  expect(cover.x).toBeGreaterThanOrEqual(0);
  expect(cover.x + cover.width).toBeLessThanOrEqual(viewport.width);
  expect(cover.y + cover.height).toBeLessThanOrEqual(viewport.height);
  expect(Math.max(cover.width / viewport.width, cover.height / (viewport.height - 76))).toBeGreaterThan(.75);
  await expectNoOverflow(page);
  await page.screenshot({ path: testInfo.outputPath('comic.png') });
  await page.locator('.book').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#c1')).toBeChecked();
  await expectNoOverflow(page);
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('#c1')).not.toBeChecked();
  await page.goto('/gioithieu');
  await expect(page.locator('#item1')).toContainText('4.491.408');
  await page.screenshot({ path: testInfo.outputPath('geography.png') });
});

async function expectNoOverflow(page) {
  const size = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
    height: innerHeight,
    scrollHeight: document.documentElement.scrollHeight,
  }));
  if (size.scrollHeight > size.height + 1 || size.scroll > size.width + 1) {
    console.log(await page.locator('.contain, .book, .flip-book, .flip, .next-btn, .back-btn').evaluateAll(nodes => nodes.map(node => {
      const rect = node.getBoundingClientRect();
      const style = getComputedStyle(node);
      return { class: node.className, top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, height: style.height, margin: style.margin };
    }).slice(0, 12)));
  }
  expect(size.scroll).toBeLessThanOrEqual(size.width + 1);
  expect(size.scrollHeight).toBeLessThanOrEqual(size.height + 1);
}

test('home keeps current facts, menu and viewport sizing', async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('.location-title')).toHaveText('ĐỒNG NAI');
  await expect(page.locator('.knowledge-content')).toContainText('4.491.408');
  await expect(page.locator('app-menu button')).toHaveCount(6);
  await expect(page.locator('.location')).toHaveCSS('opacity', '1');
  const facts = await page.locator('.knowledge-content').boundingBox();
  const source = await page.locator('.data-source').boundingBox();
  expect(facts.y + facts.height).toBeLessThanOrEqual(source.y);
  await expectNoOverflow(page);
  await page.screenshot({ path: testInfo.outputPath('home.png'), fullPage: true });
  await page.locator('app-menu button').nth(4).click();
  await expect(page).toHaveURL(/\/dialy$/);
  await expectNoOverflow(page);
  expect(errors).toEqual([]);
});

test('slideshow wraps and books support pointer and keyboard', async ({ page }, testInfo) => {
  await page.goto('/gioithieu');
  await expect(page.locator('.slide-item.active')).toHaveCount(1);
  await page.locator('.prev-slide').click();
  await expect(page.locator('#item5')).toHaveClass(/active/);
  await page.locator('.next-slide').click();
  await expect(page.locator('#item1')).toHaveClass(/active/);
  await expectNoOverflow(page);
  await page.goto('/em-yeu-dia-li/vietnam');
  await expect(page.locator('app-current-info')).toHaveCount(0);
  await page.screenshot({path: testInfo.outputPath('book.png'), animations: 'disabled'});
  await page.locator('#p1 .next-btn').click();
  await expect(page.locator('#c1')).toBeChecked();
  await page.locator('.book').focus();
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('#c1')).not.toBeChecked();
  await expectNoOverflow(page);
});

test('quiz still accepts answers and displays a result', async ({ page }) => {
  await page.goto('/tests/bienhoa_test');
  const answers = ['A', 'B', 'A', 'C', 'B', 'A', 'A', 'A', 'A', 'C'];
  for (let i = 0; i < answers.length; i++) {
    await page.locator(`input[id="${i + 1}${answers[i]}"]`).check();
  }
  await page.getByRole('button', { name: 'Nộp bài' }).click();
  await expect(page.locator('h2').filter({ hasText: 'Số câu đúng' })).toContainText('10');
});

test('media failures settle and leave an accessible fallback', async ({ page }) => {
  await page.route('**/assets/**', route => matchesAsset(route.request().url(), 'assets/images/gioithieu.jpg') ? route.abort() : route.continue());
  await page.goto('/dialy');
  const image = page.locator('img[data-media-src="assets/images/gioithieu.jpg"]');
  await expect(image).toHaveClass(/media-error/);
  await expect(image).not.toHaveClass(/media-loading/);
  await expect(image).toHaveAttribute('alt', 'Không tải được hình ảnh');
});

test('representative lesson and resource routes render without application errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of ['/noidung', '/lichsu', '/tainguyen', '/sachdientu', '/sachlichsu', '/dulich', '/amthuc', '/bando', '/gioithieuchung', '/quay-xuc-xac']) {
    await page.goto(route);
    await expect(page.locator('app-root > .body > .content > :not(router-outlet)')).toHaveCount(1);
    await expect(page.locator('app-menu button')).toHaveCount(6);
  }
  expect(errors).toEqual([]);
});

test('contents headings navigate and obsolete map controls stay removed', async ({ page }) => {
  await page.goto('/noidung');
  await page.locator('a.title').nth(2).click();
  await expect(page).toHaveURL(/\/dialy$/);
  await page.goto('/bando');
  await expect(page.locator('app-current-info, .goto')).toHaveCount(0);
});

test('map popup preserves image proportions', async ({ page }) => {
  await page.goto('/bando');
  await page.locator('svg a').first().click();
  const image=page.locator('.modal-content img');
  await expect(image).toBeVisible();
  await expect(image).toHaveCSS('object-fit','contain');
  await expect(image).toHaveJSProperty('complete',true);
  await expect(page.locator('.modal-dialog')).toHaveCSS('transform', 'none');
  const bounds = await page.locator('.modal-content').evaluate(node => {
    const image = node.querySelector('img').getBoundingClientRect();
    const button = node.querySelector('button').getBoundingClientRect();
    const modal = node.getBoundingClientRect();
    return { scroll: node.scrollHeight - node.clientHeight, top: modal.top, bottom: modal.bottom,
      imageBottom: image.bottom, buttonTop: button.top, buttonBottom: button.bottom };
  });
  expect(bounds.scroll).toBeLessThanOrEqual(1);
  expect(bounds.top).toBeGreaterThanOrEqual(0);
  expect(bounds.bottom).toBeLessThanOrEqual(page.viewportSize().height);
  expect(bounds.imageBottom).toBeLessThanOrEqual(bounds.buttonTop);
  expect(bounds.buttonBottom).toBeLessThan(bounds.bottom - 10);
  await page.keyboard.press('Escape');
  await expect(image).toHaveCount(0);
});
