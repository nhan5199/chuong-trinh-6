# Homepage map

- Boundary: Vietnamese Provinces Database by Thang Le Quoc, MIT license (see adjacent license file).
  https://github.com/thanglequoc/vietnamese-provinces-database/blob/master/docs/gis/README.md
- Source snapshot: `dataset-generation-scripts/resources/gis/geojson_11Mar2026/28_tinh_đong_nai/province.geojson`.
  Derived by that project from the Vietnam Administrative Units Reference Map, https://sapnhap.bando.com.vn.
- Satellite background: Esri World Imagery REST export, accessed 23 October 2026.
  https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer
  Imagery: Esri, Maxar, Earthstar Geographics, and the GIS User Community.
- Geographic coordinates projected to Web Mercator for exact alignment with the satellite export.
  Rebuild using `node scripts/build-home-map.cjs`. Satellite acquisition dates vary; this is not live imagery.
- Administrative status and statistical figures: https://dongnai.gov.vn/vi/news/quoc-hoi-hoi-dong-nhan-dan/quoc-hoi-chinh-thuc-thong-qua-nghi-quyet-thanh-lap-thanh-pho-dong-nai-hieu-luc-tu-30-4-2026-61152.html

This is an educational location illustration, not a cadastral map.
