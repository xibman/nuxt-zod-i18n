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
  compatibilityDate: '2024-12-24',
  typescript: { strict: false },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c =>
        ['UButton', 'UIcon'].includes(c.pascalName),
      )

      globals.forEach(c => (c.global = true))
    },
  },
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
