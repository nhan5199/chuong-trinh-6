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
the home map caption identifies its older boundary. Updating facts inside
images, videos and Storyline exports requires revised source materials.

Compatible runtime and tooling packages were updated within existing major
versions. Angular 15 remains unsupported; a supported Angular migration is still
needed to address framework advisories. The npm audit on this dependency tree
reported 92 advisories (4 critical, 50 high, 33 moderate, 5 low), including
development dependencies. No forced major updates or vulnerability suppression
were applied. The host uses Node 24, outside Angular 15's documented Node support;
successful checks on this host do not establish supported-runtime compatibility.
See [Angular's compatibility table](https://angular.dev/reference/versions).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
