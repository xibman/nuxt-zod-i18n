// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@vueuse/nuxt',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-05-15',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  icon: {
    provider: 'iconify',
  },

  llms: {
    domain: 'https://xibman-nuxt-zod-i18n.nuxt.space/',
    title: 'Nuxt zodI18n documentation',
    description: 'Translate zod error message easily',
    full: {
      title: 'Nuxt zodI18n documentation - Full Documentation',
      description: 'This is the full documentation for the Nuxt zodI18n.',
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' },
        ],
      },
      {
        title: 'Usage',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/usage%' },
        ],
      },
      {
        title: 'Add or improve translation',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: '=', value: '/add-improve-translation' },
        ],
      },
    ],
  },
})
