# Project

This educational application uses Angular 15.2 and NgModules.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run test:e2e` for Playwright checks in desktop (1440×900), phone
portrait (390×844), and phone landscape (844×390). Install Google Chrome first;
the config uses the local Chrome channel. The command starts a local development
server automatically. Screenshots and failure traces are written to `test-results/`.

Run `npm test -- --watch=false --browsers=ChromeHeadless` for the complete
Jasmine/Karma unit suite. Set `CHROME_BIN` when Chrome is installed in a
nonstandard location. A production build may need network access to inline the
existing Google Fonts stylesheets.

## Content and maintenance notes (22 October 2026)

The home summary uses the 2026 Đồng Nai establishment figures: 12,737.18 km² and
4,491,408 people. These are the resolution's population figures, not a live
population estimate. The source link is shown in the UI. Existing map artwork,
image books, quizzes and embedded lessons preserve their original material;
the home map uses the merged boundary with source attribution. Updating facts inside
images, videos and Storyline exports requires revised source materials.

Compatible runtime and tooling packages were updated within existing major
versions. Angular 15 remains unsupported; a supported Angular migration is still
needed to address framework advisories. The npm audit on this dependency tree
reported 92 advisories (4 critical, 50 high, 33 moderate, 5 low), including
development dependencies. No forced major updates or vulnerability suppression
were applied. The host uses Node 24, outside Angular 15's documented Node support;
successful checks on this host do not establish supported-runtime compatibility.
See [Angular's compatibility table](https://angular.dev/reference/versions).

## Image loading and reader performance

Static images use `data-media-src` so the shared media directive can reserve their
intrinsic dimensions and choose a smaller responsive image before requesting it.
Book images are requested only for the current and nearby sheets. Reading progress
is saved per book in local browser storage; arrow keys turn pages and Home returns
to the cover. Storage failures do not prevent reading. Failed images expose a
retry button. Image decoding completes before the book skeleton is removed.

`npm run optimize:media` rebuilds the optional WebP variants and metadata using the
installed Chrome browser, preserving original assets and choosing replacements
only when smaller. `node scripts/optimize-media.cjs --metadata-only` refreshes
dimensions without encoding images. Generated variants and the manifest are
checked in, so ordinary builds do not require image conversion. Review
`reports/image-performance.json` for byte measurements and missing sources.

With a local preview running, `npm run audit:site` checks all static routes for
application errors, requested-image failures and horizontal overflow. Set
`SITE_VIEWPORT=mobile` to repeat at phone width. Browser tests also exercise slow
image/frame loads, retries, saved-page limits, keyboard controls and storage denial.

The guide still references a missing original image,
`assets/comics/HuongDanSuDung/40.png`. It displays the normal error/retry state when
reached. The original content is needed to restore that page accurately.

## Shared component styles

Reusable component CSS lives in `src/app/shared/styles/` and is included through
Angular `styleUrls`, preserving component scoping. Image lessons share
`image-lesson.css`. Readers combine `book-core.css`, their comic/country/scan
layout, and page-stack rules for their sheet count. Distinct reader layouts and
unique stacks stay in their component CSS. `reader-font.css` is included only by
readers that already used Roboto.

The two resource menus load their local base differences before
`resource-menu.css`, whose responsive rules preserve the original cascade.
Edit shared rules at their source instead of copying them into another component.
With the preview running, `node scripts/capture-reader-styles.cjs` records book
geometry and computed styles at desktop, phone and landscape sizes for comparison.
Cleanup measurements and verification results are in `reports/css-cleanup.json`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
