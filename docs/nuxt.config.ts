export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
  ],
  // Devtools / Typescript
  devtools: { enabled: true },
  site: {
    url: 'https://xibman-nuxt-zod-i18n.nuxt.space/',
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  compatibilityDate: '2024-07-10',
  typescript: { strict: false },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
    },
  },
  icon: {
    serverBundle: 'remote',
  },
})
