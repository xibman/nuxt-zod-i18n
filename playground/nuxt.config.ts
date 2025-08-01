export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/i18n', '@nuxt/ui'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
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
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
})
