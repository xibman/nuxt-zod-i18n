export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted',
      },
    },
  },
  seo: {
    siteName: 'Nuxt zodI18n documentation',
  },
  header: {
    title: 'Nuxt zodI18n',
    to: '/',
    logo: {
      alt: '',
      light: './img/nuxt-zod-i18n.svg',
      dark: './img/nuxt-zod-i18n.svg',
    },
    search: true,
    colorMode: true,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/xibman/nuxt-zod-i18n',
        'target': '_blank',
        'aria-label': 'Nuxt zodI18n on GitHub',
      },
    ],
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-nuxtdotjs',
        'to': 'https://nuxt.com',
        'target': '_blank',
        'aria-label': 'Nuxt Website',
      },
      {
        'icon': 'i-simple-icons-zod',
        'to': 'https://zod.dev/',
        'target': '_blank',
        'aria-label': 'Zod Website',
      },
      {
        'icon': 'i-simple-icons-googletranslate',
        'to': 'https://i18n.nuxtjs.org/',
        'target': '_blank',
        'aria-label': 'Nuxt i18n Website',
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/xibman/nuxt-zod-i18n',
        'target': '_blank',
        'aria-label': 'Nuxt zodI18n on GitHub',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/xibman/nuxt-zod-i18n/tree/main/docs/content',
      links: [
        {
          icon: 'i-heroicons-star',
          label: 'Star on GitHub',
          to: 'https://github.com/xibman/nuxt-zod-i18n',
          target: '_blank',
        },
      ],
    },
  },
})
