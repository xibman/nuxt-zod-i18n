export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/i18n', '@nuxt/ui'],
  devtools: { enabled: true },

  ui: {
    icons: {
      // @ts-expect-error see https://ui.nuxt.com/components/icon#dynamic
      dynamic: true,
    },
  },

  i18n: {
    defaultDirection: 'ltr',
    defaultLocale: 'en-GB',
    langDir: './locales',
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

  compatibilityDate: '2024-09-16',
})
