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

Skeleton follow-up (local, not pushed): legacy book white backgrounds masked the
existing media shimmer. Added page-shaped green skeleton overlays with title,
illustration and text bars until images decode; loading CSS now overrides legacy
image backgrounds. Image-source mutations reset busy/error state, decode results
are revision checked, and observers disconnect on destruction. Error placeholders
use a muted background. Reduced-motion rules apply to shimmer.
Verification: 29 unit tests, nine targeted browser tests (loading/error/navigation)
pass; final skeleton appearance rechecked on all three viewports (3 passing).
Production build passes with the existing third-party critical-CSS warnings.
Future speed priorities: responsive/compressed scans and a book-aware nearby-page
loader (native lazy loading alone does not suit hidden/transformed book pages).

Active performance pass: preserve existing UI while replacing eager full-book
downloads with current/nearby-page requests, restoring reading position, exposing
retry actions, reserving intrinsic image dimensions, and generating smaller local
image variants. Baseline uncommitted skeleton work above must be retained.
One helper owns only asset tooling/manifest/output; root owns runtime, templates,
tests and integration. Verify request counts, failures/retries, cached/delayed
loads, saved-page boundaries, desktop/portrait/landscape, unit suite and build.

Performance pass complete locally (not committed/pushed/deployed):
- Generated 946 smaller WebP variants and intrinsic metadata for 637 images;
  originals retained. Candidate totals: 392.6MB original, 146.0MB desktop,
  73.0MB mobile. Readability spot-checked; replacements used only when smaller.
- 715 static img references now use data-media-src, so metadata/variant selection
  happens before requesting the image. Nearby-sheet book loader requests four
  initial images instead of all52. Measured /sachdiali transfer: 8,018,949 ->
  1,017,040 bytes including its other asset (reports/reader-transfer.json).
- Added per-book local saved progress, valid actual-sheet bounds, keyboard page
  controls/Home, visible-only focus targets, retry buttons and failure cleanup.
  Image and iframe skeletons reset on source changes and wait for decode/load.
- Corrected missing Angular declaration for NguyenHuuCanhComicComponent, one end
  image filename, mobile reader/dice overflow and responsive intrinsic sizing.
- Asset helper independently reviewed root's runtime changes and rechecked the
  two resulting fixes (unused checkbox restoration and hidden focus controls).
- All77 static routes audited at desktop and phone widths: no horizontal
  overflow, application exceptions or failed initially-requested images. Full48
  browser tests pass across desktop/portrait/landscape. After final reader-size
  and retry cleanup edits, affected12/9 checks pass again. Unit suite31 passes;
  final production build passes with the existing critical-CSS warnings.
- Remaining original content gap: assets/comics/HuongDanSuDung/40.png is absent.
  It is explicitly listed in the report and gets an error/retry state when reached.
  No replacement educational content was fabricated. Third-party player content
  availability cannot be guaranteed by the local loading-state tests.
Reproduce with npm run optimize:media, npm run audit:site (SITE_VIEWPORT=mobile
for phones), npm run test:e2e, npm test, and npm run build. Details in README.

CSS cleanup complete locally (not committed/pushed/deployed):
- Removed31duplicate component CSS files. Source totals under src/app fell from
  72files /249,479bytes to53files /110,071bytes, a55.9%reduction. The12shared
  styles cover14image lessons,25readers (core,3layout families,5shared stacks,
  font faces), and2resource menus. Distinct layouts/stacks remain component-local.
- Angular styleUrls preserve encapsulation. Resource-menu local base rules load
  before shared responsive rules. No exact duplicate stylesheets remain.
- All150book geometry/computed-style snapshots match across25routes,3viewports,
  closed/open states. Six settled lesson viewports match; original CSS content is
  unchanged after newline normalization. Initial lesson background-only differences
  came from skeleton timing; capture now awaits loading-class removal and paint.
  Helper report records52isolated resource-menu comparisons with zero differences.
- Full48browser checks and31unit tests pass. Final77desktop+77mobile route audits
  and production build pass (existing critical-CSS warnings remain). All stylesheet
  references resolve; diff whitespace check passes. Prior performance work retained.
- Summary in reports/css-cleanup.json; raw reader captures moved to ignored
  test-results/css-{baseline,after}.json. Reusable capture script and shared-style
  conventions documented in README. No commits or deployment requested.

Video loading follow-up (24 October 2026):
- Started from clean main at e0ff87a, which already includes the earlier media
  performance and CSS cleanup work. User authorized committing and pushing main.
- Replaced the video-container skeleton with an accessible spinner per player.
  All14YouTube embeds across13templates reserve their existing dimensions and
  reveal on iframe load. Source changes/retries restart the spinner; load/error
  and destruction stop it. Embedded exercises retain their existing skeleton.
- Reproduced the missing-spinner failure before the fix. All54browser checks now
  pass across desktop/portrait/landscape, including every video route, independent
  players, source reload, reduced motion, centering and unchanged loading geometry.
  All32unit tests and production build pass; existing critical-CSS warnings remain.
  Spinner screenshot visually checked. iframe URLs/permissions/titles/dimensions
  remain unchanged; whitespace check passes. Tests control embed responses and
  verify document-load reveal, not third-party video playback availability.
