const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../src/app/shared/media-manifest.ts'), 'utf8');
const manifest = JSON.parse(source.slice(source.indexOf('= {') + 2).trim().replace(/;$/, ''));

function assetPaths(original) {
  const asset = manifest[original];
  return new Set([original, asset?.src, ...(asset?.srcset?.split(',').map(item => item.trim().split(/\s+/)[0]) ?? [])].filter(Boolean));
}

function matchesAsset(url, original) {
  return assetPaths(original).has(decodeURIComponent(new URL(url).pathname).replace(/^\//, ''));
}

module.exports = { manifest, matchesAsset };
