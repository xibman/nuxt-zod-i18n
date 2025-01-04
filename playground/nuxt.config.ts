export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/i18n', '@nuxt/ui'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },
  compatibilityDate: '2024-12-24',

  i18n: {
    defaultDirection: 'ltr',
    defaultLocale: 'en-GB',
    langDir: 'locales',
    lazy: true,
    locales: [
      {
        code: 'en-GB',
        dir: 'ltr',
        file: 'en-GB.json',
        flag: 'gb',
        isCatchallLocale: true,
        language: 'en-GB',
        name: 'English',
      },
      {
        code: 'fr-FR',
        dir: 'ltr',
        file: 'fr-FR.json',
        flag: 'fr',
        language: 'fr-FR',
        name: 'French',
      },
    ],
    strategy: 'prefix_except_default',
    types: 'composition',
  },
})
