// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@nuxtlabs/github-module'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  github: {
    repo: 'xibman/nuxt-zod-i18n'
  },
  routeRules: {
    '/api/search.json': { prerender: true }
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
