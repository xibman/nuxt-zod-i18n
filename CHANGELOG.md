# Changelog

## v1.8.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.7.0...v1.8.0)

### 🚀 Enhancements

- **i18n:** Add new language ru-RU thanks to @ncodealex ([2791b3b](https://github.com/xibman/nuxt-zod-i18n/commit/2791b3b))

### 🩹 Fixes

- **i18n:** Add missing space in zh language ([98a6820](https://github.com/xibman/nuxt-zod-i18n/commit/98a6820))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>

## v1.7.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.6.0...v1.7.0)

### 🚀 Enhancements

- **i18n:** Add localazy for i18n keys managment ([90246e4](https://github.com/xibman/nuxt-zod-i18n/commit/90246e4))
- **i18n:** Add new languages fr-IR tr-TR ([74aff6d](https://github.com/xibman/nuxt-zod-i18n/commit/74aff6d))

### 📖 Documentation

- Update doc for error interpolation ([9dde48f](https://github.com/xibman/nuxt-zod-i18n/commit/9dde48f))

### 🏡 Chore

- **commit hook:** Add commit hook to lint / test before pushing to repo ([8dd17fe](https://github.com/xibman/nuxt-zod-i18n/commit/8dd17fe))

### 🎨 Styles

- **linting:** Use eslint v9 and flat config ([360da10](https://github.com/xibman/nuxt-zod-i18n/commit/360da10))
- **linting:** Apply linting ([894f0c9](https://github.com/xibman/nuxt-zod-i18n/commit/894f0c9))

### 🤖 CI

- **husky:** Disable husky on ci ([8056f64](https://github.com/xibman/nuxt-zod-i18n/commit/8056f64))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>

## v1.6.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.5.0...v1.6.0)

### 🚀 Enhancements

- **module option:** Add new option useModuleLocale to toggle module locale loading ([3fefe9c](https://github.com/xibman/nuxt-zod-i18n/commit/3fefe9c))

### 🩹 Fixes

- **plugin loading strategy:** Load plugin in parallel mode with explicit dependency to i18n:plugin ([e85d879](https://github.com/xibman/nuxt-zod-i18n/commit/e85d879))

### 💅 Refactors

- **typing:** Rework type import from @nuxt/i18n ([57806a2](https://github.com/xibman/nuxt-zod-i18n/commit/57806a2))

### 📖 Documentation

- Use new `nuxi module add` command in installation ([#24](https://github.com/xibman/nuxt-zod-i18n/pull/24))
- **modules options:** Add doc for new module option useModuleLocale ([5f181ad](https://github.com/xibman/nuxt-zod-i18n/commit/5f181ad))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>
- Daniel Roe ([@danielroe](http://github.com/danielroe))

## v1.5.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.4.0...v1.5.0)

### 🚀 Enhancements

- **i18n:** Add translation for both simplified and traditional Chinese ([#21](https://github.com/xibman/nuxt-zod-i18n/pull/21))

### 🩹 Fixes

- **typing:** Correct @nuxtjs/i18n typing imports ([9b0855f](https://github.com/xibman/nuxt-zod-i18n/commit/9b0855f))

### 💅 Refactors

- **ts:** Remove comment to ignore type for getNormalizedLocales ([1d3c6d0](https://github.com/xibman/nuxt-zod-i18n/commit/1d3c6d0))

### 🎨 Styles

- **linting:** Apply linting to new zh translations ([d296b4a](https://github.com/xibman/nuxt-zod-i18n/commit/d296b4a))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>
- Kyle Xie ([@KyleXie](http://github.com/KyleXie))

## v1.4.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.3.0...v1.4.0)

### 🚀 Enhancements

- **locales loading:** Use nuxt/i18n config to restrict module locale to load ([5a62629](https://github.com/xibman/nuxt-zod-i18n/commit/5a62629))

### 🩹 Fixes

- **issue template:** Fix ident problem ([afce42b](https://github.com/xibman/nuxt-zod-i18n/commit/afce42b))
- **issue template:** Fix wrong formated lines ([ae80e7b](https://github.com/xibman/nuxt-zod-i18n/commit/ae80e7b))
- **issue template:** Fix name for translation template ([3464cdd](https://github.com/xibman/nuxt-zod-i18n/commit/3464cdd))

### 📖 Documentation

- **github:** Add issue template for translations ([b119792](https://github.com/xibman/nuxt-zod-i18n/commit/b119792))
- **translation:** Add link to localazy translation interface ([e7005f9](https://github.com/xibman/nuxt-zod-i18n/commit/e7005f9))

### 🏡 Chore

- Update deps ([9f17aaf](https://github.com/xibman/nuxt-zod-i18n/commit/9f17aaf))

### 🎨 Styles

- Linting ([41b99cb](https://github.com/xibman/nuxt-zod-i18n/commit/41b99cb))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>

## v1.3.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.2.0...v1.3.0)

### 🚀 Enhancements

- **module:** Add locales mapping to ModuleOptions ([#14](https://github.com/xibman/nuxt-zod-i18n/pull/14))

### 🏡 Chore

- **global:** Update dependencies ([920ea44](https://github.com/xibman/nuxt-zod-i18n/commit/920ea44))

### ❤️ Contributors

- Daniele Nicosia <zdanymc@gmail.com>
- Julien Georget <julien.georget@hikoala.com>

## v1.2.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.1.0...v1.2.0)

### 🚀 Enhancements

- **doc:** Add missing config for prerendering ([01c0993](https://github.com/xibman/nuxt-zod-i18n/commit/01c0993))
- **repository:** Add issue and PR template ([48e0004](https://github.com/xibman/nuxt-zod-i18n/commit/48e0004))

### 🩹 Fixes

- **doc deployment:** Add goal to stub and prepare module ([7e55348](https://github.com/xibman/nuxt-zod-i18n/commit/7e55348))
- **doc deployement:** Add -w goal to @nuxthq/studio installation ([4f5cf05](https://github.com/xibman/nuxt-zod-i18n/commit/4f5cf05))
- **doc deployement:** Add -w goal to @nuxthq/studio installation ([7ccaba9](https://github.com/xibman/nuxt-zod-i18n/commit/7ccaba9))
- **doc:** Update seo and add image for open graph ([f07c0f6](https://github.com/xibman/nuxt-zod-i18n/commit/f07c0f6))

### 📖 Documentation

- **documentation:** Add full doc for the module ([b15f690](https://github.com/xibman/nuxt-zod-i18n/commit/b15f690))
- **error page:** Add missing header links ([840d733](https://github.com/xibman/nuxt-zod-i18n/commit/840d733))
- **doc:** Clean seo ([3066218](https://github.com/xibman/nuxt-zod-i18n/commit/3066218))
- **playground:** Update translations ([6a78b43](https://github.com/xibman/nuxt-zod-i18n/commit/6a78b43))

### 🏡 Chore

- **app:** Initial commit by Nuxt Studio ([7e78be2](https://github.com/xibman/nuxt-zod-i18n/commit/7e78be2))
- **deployment:** Add workflow file ([7698b12](https://github.com/xibman/nuxt-zod-i18n/commit/7698b12))
- **dependencies:** Update dependencies ([bce3b83](https://github.com/xibman/nuxt-zod-i18n/commit/bce3b83))
- **dependencies:** Update Dependencies ([f52b4eb](https://github.com/xibman/nuxt-zod-i18n/commit/f52b4eb))
- **dependencies update:** Update ui-pro ([497331f](https://github.com/xibman/nuxt-zod-i18n/commit/497331f))
- **linting:** Add rule to enforce key order in json files ([4eb5066](https://github.com/xibman/nuxt-zod-i18n/commit/4eb5066))
- **global:** Update dependencies ([c6e7225](https://github.com/xibman/nuxt-zod-i18n/commit/c6e7225))

### 🎨 Styles

- **global:** Linting ([a8e8ef7](https://github.com/xibman/nuxt-zod-i18n/commit/a8e8ef7))

### 🤖 CI

- **doc deployment:** Add goal to prepare module before building doc ([76444a7](https://github.com/xibman/nuxt-zod-i18n/commit/76444a7))
- **doc deplyment:** Update github action to prepare module before building doc ([f1f7978](https://github.com/xibman/nuxt-zod-i18n/commit/f1f7978))
- **doc deployment:** Update deploy action ([0f26058](https://github.com/xibman/nuxt-zod-i18n/commit/0f26058))
- **doc deployment:** Add missing env NUXT_PUBLIC_SITE_URL ([86e3141](https://github.com/xibman/nuxt-zod-i18n/commit/86e3141))
- **deploy:** Remove NUXT_APP_BASE_URL from generate goal ([1659aba](https://github.com/xibman/nuxt-zod-i18n/commit/1659aba))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>
- Georget Julien <georget.julien@gmail.com>

## v1.1.0

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.0.4...v1.1.0)

### 🚀 Enhancements

- **playground:** Add new overload example ([b8ae329](https://github.com/xibman/nuxt-zod-i18n/commit/b8ae329))

### 📖 Documentation

- **readme:** Add information regarding module import order ([3a203e2](https://github.com/xibman/nuxt-zod-i18n/commit/3a203e2))

### 🏡 Chore

- **linting / formating:** Add rules to format and lint full project ([b23b438](https://github.com/xibman/nuxt-zod-i18n/commit/b23b438))

### 🎨 Styles

- **linting:** Lint full project with new rules ([e1b7ba6](https://github.com/xibman/nuxt-zod-i18n/commit/e1b7ba6))
- **linting:** Linting ([c50b008](https://github.com/xibman/nuxt-zod-i18n/commit/c50b008))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>

## v1.0.4

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.0.3...v1.0.4)

### 🩹 Fixes

- **runtime config:** Add missing import from #app for useRuntimeConfig ([49c924e](https://github.com/xibman/nuxt-zod-i18n/commit/49c924e))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>

## v1.0.3

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.0.2...v1.0.3)

### 🩹 Fixes

- **global:** Move utils folder to runtime for full export ([af2ebe0](https://github.com/xibman/nuxt-zod-i18n/commit/af2ebe0))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>

## v1.0.2

[compare changes](https://github.com/xibman/nuxt-zod-i18n/compare/v1.0.1...v1.0.2)

### 🩹 Fixes

- **locales:** Move locales folder into runtime folder ([088f8a0](https://github.com/xibman/nuxt-zod-i18n/commit/088f8a0))

### 📖 Documentation

- **readme:** Add missing link to playground ([32f274e](https://github.com/xibman/nuxt-zod-i18n/commit/32f274e))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>

## v1.0.1

### 🏡 Chore

- Initial commit ([9cf92be](https://github.com/xibman/nuxt-zod-i18n/commit/9cf92be))

### ❤️ Contributors

- Julien Georget <julien.georget@hikoala.com>
