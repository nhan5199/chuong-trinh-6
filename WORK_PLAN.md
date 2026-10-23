Task: preserve the existing educational UI while improving loading, runtime cleanup,
responsive sizing and current Đồng Nai information.

Baseline: clean git tree; Angular 15.2, NgModules, Jasmine/Karma; dependencies absent.

Acceptance checks:
- Existing routes, book controls, games and navigation remain usable.
- Media indicates pending/error states; offscreen media can load on demand.
- Slideshow timers stop when the component is destroyed.
- Content uses the actual menu and viewport size; mobile/desktop avoid accidental overflow.
- Current summary facts have dated official sources; embedded historical materials are identified.
- Compatible dependency updates, production build, tests and browser checks are recorded.

Work order: baseline checks → shared layout/media improvements → slideshow cleanup →
dated content → compatible package updates → tests/build/browser verification → diff review.

Implemented: native media loading/error feedback, book-safe decoding, scoped menu
measurement with observer cleanup, slideshow query caching/timer disposal,
keyboard menu controls, focused transitions/reduced motion, viewport/phone book
and geography layout fixes, compatible runtime/tooling updates, sourced 2026
summary and archival notices. Existing static media content is not regenerated.

Verification: production build succeeds (1.19 MB raw initial bundle; two existing
critical-CSS selector warnings). Unit suite: 28 passing, no template errors.
Final Playwright desktop/portrait/landscape run: 15 passing. npm audit and Node
compatibility limitations are documented in README. Changes remain local.
Screenshot review found a caption contrast/overlap issue in the new source line;
corrected it and reran all three home viewport checks (3 passing) and production
build. Diff whitespace check and package/lockfile consistency check pass.

Follow-up: user requested banner/right-arrow removal, working contents links,
larger proportional menu/media sizing, improved book flipping, refreshed general
introduction, and unstretched map popups. Removed banner instances and map goto;
added RouterLinks to contents, fixed resource-card event bubbling, removed menu
margin gap, centred closed covers and added keyboard page turning. General
introduction now contains sourced current information. Map dialogs constrain
image height with object-fit contain. Preserve pre-existing angular.json changes.
Follow-up verification: production build and 28 unit tests pass; 21 browser checks
pass across desktop/portrait/landscape. Screenshot review prompted native-image
aspect-ratio sizing for books to remove white letterboxing; the three affected
book checks and production build pass again after that correction.

Latest screenshot corrections: removed overview text from the introduction menu;
aligned responsive image and label widths; padded navigation; prevented canvas
top-margin collapse; fitted map popup images with a padded absolute bottom CTA.
Closed book covers now use the full available height or width, while open spreads
remain viewport bounded. Refreshed /gioithieu with readable responsive panels,
2026 sourced population/area/administration, and explicitly historical map imagery.
Old detailed geographic statistics were removed where their scope no longer
matches current boundaries; embedded archival images remain unchanged.
Verification: 28 unit tests pass; production build passes with the same two
third-party critical-CSS warnings. Added browser checks for the exact reported
routes, full popup visibility, equal card widths, canvas spacing, and comic size
and keyboard flipping. Reviewed desktop and mobile screenshots. No deployment.

Current follow-up: restored natural menu-image ratios (including a conflicting
landscape component rule), retained matching label widths, and removed the slide
counter. Map popup outer panel is transparent. Added a passive, cleaned-up scroll
listener and accessible upward-arrow control for long pages; smooth scrolling
respects reduced-motion preferences.
Homepage and geography use a local SVG geographic illustration built from the
11 March 2026 post-merger GIS boundary and attributed Esri satellite imagery.
Source geometry, license, attribution and reproducible build script are retained.
Introduction panels use dark green/gold styling and sourced current local examples.
Verification: 29 unit tests pass; the existing 24 browser checks pass and three
new ratio/scroll checks pass after correcting the landscape rule. The affected
landscape home/ratio checks also pass after the final viewport sizing correction.
Production build passes with the existing third-party critical-CSS warnings.

Latest fixes: geography menu images now share square frames and equal label
heights, using contain to preserve the original artwork proportions. Back-arrow
links reserve their hover border so their position does not shift. Book containers
are explicitly viewport bounded, and page labels toggle inputs without browser
focus scrolling. Nine targeted browser checks pass across all three viewports;
manual browser measurements confirm identical arrow rectangles on hover and zero
document scroll after repeated page turns. Diff whitespace check passes.
