const { test, expect } = require('@playwright/test');
const { matchesAsset } = require('./media-helpers.cjs');

test('reserved artwork stays proportional and reader screens do not overflow', async ({ page }) => {
  await page.goto('/lehoi');
  const artwork = page.locator('.picture-content img').first();
  await artwork.evaluate(image => image.decode());
  const ratio = await artwork.evaluate(image => ({
    actual: image.getBoundingClientRect().width / image.getBoundingClientRect().height,
    expected: Number(image.getAttribute('width')) / Number(image.getAttribute('height')),
  }));
  expect(Math.abs(ratio.actual - ratio.expected)).toBeLessThan(.01);
  for (const route of ['/sachdiali', '/sachlichsu', '/sachbando', '/quay-xuc-xac']) {
    await page.goto(route);
    const bounds = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
    expect(bounds.scroll, route).toBeLessThanOrEqual(bounds.width + 1);
  }
});

test('embedded lessons keep a skeleton until their document loads', async ({ page }) => {
  let release;
  const pending = new Promise(resolve => { release = resolve; });
  await page.route('**/www.youtube.com/embed/**', async route => {
    await pending;
    await route.fulfill({ contentType: 'text/html', body: '<html><body>Lesson ready</body></html>' });
  });
  await page.goto('/gioithieuchung/gioithieu', { waitUntil: 'domcontentloaded' });
  const frame = page.locator('iframe');
  await expect(frame).toHaveAttribute('aria-busy', 'true');
  await expect(frame).toHaveCSS('visibility', 'hidden');
  await expect(page.locator('.media-frame')).toHaveCSS('background-image', /linear-gradient/);
  release();
  await expect(frame).not.toHaveClass(/media-loading/);
  await expect(frame).toHaveCSS('visibility', 'visible');
});

test('large books request nearby sheets and resume the last spread', async ({ page }, testInfo) => {
  await page.goto('/sachdiali');
  const cover = page.locator('#p1 .front img');
  await expect(cover).not.toHaveClass(/media-loading|media-error/);
  const initial = await page.locator('.book').evaluate(book => ({
    total: book.querySelectorAll('img').length,
    requested: book.querySelectorAll('img[src]').length,
    bytes: performance.getEntriesByType('resource').filter(entry => entry.name.includes('/assets/')).reduce((sum, entry) => sum + entry.encodedBodySize, 0),
  }));
  expect(initial.total).toBeGreaterThan(40);
  expect(initial.requested).toBeLessThanOrEqual(4);
  // The measured eager-reader baseline was 8,018,949 bytes. Require >75% savings.
  expect(initial.bytes).toBeLessThan(8018949 / 4);
  await testInfo.attach('initial-book-transfer', { body: JSON.stringify(initial), contentType: 'application/json' });
  await expect(page.locator('.book img').last()).not.toHaveAttribute('src');
  await page.locator('.book').focus();
  for (let i = 1; i <= 3; i++) {
    await page.keyboard.press('ArrowRight');
    await expect(page.locator(`#c${i}`)).toBeChecked();
  }
  await expect(page.locator('#p4 .front img')).not.toHaveClass(/media-loading|media-error/);
  await page.reload();
  await expect(page.locator('#c3')).toBeChecked();
  await expect(page.locator('#c4')).not.toBeChecked();
  await expect(page.locator('#p4 .front img')).not.toHaveClass(/media-loading|media-error/);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  await page.locator('.book').focus();
  await page.keyboard.press('Home');
  await page.reload();
  await expect(page.locator('#c1')).not.toBeChecked();
  await page.evaluate(() => {
    const key = Object.keys(localStorage).find(key => key.startsWith('dong-nai:reader:'));
    localStorage.setItem(key, '999999');
  });
  await page.reload();
  await expect(page.locator('#c1')).not.toBeChecked();
});

test('unused legacy controls cannot restore or navigate to nonexistent pages', async ({ page }) => {
  await page.goto('/em-yeu-dia-li/vietnam');
  await expect(page.locator('.book label[tabindex="0"]')).toHaveCount(1);
  await page.evaluate(() => localStorage.setItem('dong-nai:reader:/em-yeu-dia-li/vietnam:assets/dong-nam-a/vietnam/1.png', '6'));
  await page.reload();
  await expect(page.locator('#c1')).not.toBeChecked();
  await expect(page.locator('#p1 .front img')).not.toHaveClass(/media-loading|media-error/);
  await page.locator('#p1 .front .next-btn').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.book')).toBeFocused();
  await expect(page.locator('.book label[tabindex="0"]')).toHaveCount(2);
  for (let index = 0; index < 10; index++) await page.keyboard.press('ArrowRight');
  await expect(page.locator('#c4')).toBeChecked();
  await expect(page.locator('#c5')).not.toBeChecked();
  await expect(page.locator('.book label[tabindex="0"]')).toHaveCount(1);
  await page.reload();
  await expect(page.locator('#c4')).toBeChecked();
  await expect(page.locator('#p4 .back img')).not.toHaveClass(/media-loading|media-error/);
});

test('failed optimized book images offer a working keyboard-accessible retry', async ({ page }) => {
  await page.route('**/assets/**', route => {
    const url = route.request().url();
    if (matchesAsset(url, 'assets/dong-nam-a/vietnam/1.png') && !url.includes('media-retry=')) return route.abort();
    return route.continue();
  });
  await page.goto('/em-yeu-dia-li/vietnam');
  const cover = page.locator('#p1 .front img');
  await expect(cover).toHaveClass(/media-error/);
  const retry = page.locator('#p1 .front .media-retry');
  await expect(retry).toBeVisible();
  await retry.focus();
  await page.keyboard.press('Enter');
  await expect(cover).not.toHaveClass(/media-error|media-loading/);
  await expect(retry).toHaveCount(0);
  expect(await cover.evaluate(image => image.naturalWidth)).toBeGreaterThan(0);
  expect(await page.evaluate(() => scrollY)).toBe(0);
});

test('reader works when saving progress is blocked by the browser', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error('Storage disabled'); };
    Storage.prototype.setItem = () => { throw new Error('Storage disabled'); };
  });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/em-yeu-dia-li/vietnam');
  await expect(page.locator('#p1 .front img')).not.toHaveClass(/media-loading|media-error/);
  const next = page.locator('#p1 .front .next-btn');
  await next.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#c1')).toBeChecked();
  await expect(page.locator('#p2 .front img')).not.toHaveClass(/media-loading|media-error/);
  expect(errors).toEqual([]);
});
