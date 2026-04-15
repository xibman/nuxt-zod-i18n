export default defineNuxtConfig({
  modules: ['nuxt-zod-i18n', '@nuxtjs/i18n', '@nuxt/ui'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: 'latest',
  vite: {
    optimizeDeps: {
      include: [
        'zod',
      ],
    },
  },
  i18n: {
    defaultDirection: 'ltr',
    defaultLocale: 'en-GB',
    langDir: 'locales',
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
