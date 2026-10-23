// Rebuild a geographic illustration; no invented boundary or AI-generated geography.
// Boundary: thanglequoc/vietnamese-provinces-database, GIS snapshot 11 March 2026.
// Imagery: Esri World Imagery. Attribution is retained visibly in the SVG.
const fs = require('node:fs');
const feature = JSON.parse(fs.readFileSync('scripts/dong-nai-boundary.geojson', 'utf8')).features[0];
const project = ([lon, lat]) => [lon * 20037508.34 / 180, Math.log(Math.tan((90 + lat) * Math.PI / 360)) * 20037508.34 / Math.PI];
const [west, south] = project(feature.bbox.slice(0, 2));
const [east, north] = project(feature.bbox.slice(2));
const height = (north - south) * 1.24;
const width = height * 16 / 9;
const xmin = (west + east) / 2 - width * .4;
const ymin = (north + south) / 2 - height / 2;
const bounds = [xmin, ymin, xmin + width, ymin + height];
const point = coord => {
  const [x, y] = project(coord);
  return `${((x - xmin) / width * 1600).toFixed(2)},${(900 - (y - ymin) / height * 900).toFixed(2)}`;
};
const polygons = feature.geometry.type === 'MultiPolygon' ? feature.geometry.coordinates : [feature.geometry.coordinates];
const path = polygons.flatMap(polygon => polygon.map(ring => `M${ring.map(point).join('L')}Z`)).join('');
async function main() {
  const query = new URLSearchParams({ bbox: bounds.join(','), bboxSR: '3857', imageSR: '3857', size: '1600,900', format: 'jpg', f: 'image' });
  const response = await fetch(`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?${query}`);
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error('Satellite image export failed');
  const image = Buffer.from(await response.arrayBuffer()).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><title>Dong Nai: current merged administrative boundary</title><image width="1600" height="900" href="data:image/jpeg;base64,${image}"/><path d="${path}" fill="#24b76b" fill-opacity=".12" stroke="#fff6cf" stroke-width="5" stroke-linejoin="round"/><path d="${path}" fill="none" stroke="#ff6655" stroke-width="2.5"/><text x="640" y="470" text-anchor="middle" font-family="Arial,sans-serif" font-size="32" fill="white" stroke="#163c29" stroke-width="5" paint-order="stroke">&#272;&#7890;NG NAI</text><text x="22" y="820" font-family="Arial,sans-serif" font-size="13" fill="white" stroke="#15271c" stroke-width="3" paint-order="stroke">Imagery: Esri, Maxar, Earthstar Geographics, and the GIS User Community</text></svg>`;
  fs.writeFileSync('src/assets/maps/dong-nai-current.svg', svg);
  console.log(`Map saved: ${svg.length} bytes; boundary bounds ${feature.bbox}`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
