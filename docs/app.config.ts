export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  header: {
    logo: {
      alt: '',
      light: './img/nuxt-zod-i18n.svg',
      dark: './img/nuxt-zod-i18n.svg'
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/xibman/nuxt-zod-i18n',
        target: '_blank',
        'aria-label': 'Nuxt zodI18n on GitHub'
      }
    ]
  },
  footer: {
    credits: 'Copyright © 2023',
    colorMode: false,
    links: [
      {
        icon: 'i-simple-icons-nuxtdotjs',
        to: 'https://nuxt.com',
        target: '_blank',
        'aria-label': 'Nuxt Website'
      },
      {
        icon: 'i-simple-icons-zod',
        to: 'https://zod.dev/',
        target: '_blank',
        'aria-label': 'Nuxt Website'
      },
      {
        icon: 'i-simple-icons-googletranslate',
        to: 'https://i18n.nuxtjs.org/',
        target: '_blank',
        'aria-label': 'Nuxt Website'
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/xibman/nuxt-zod-i18n',
        target: '_blank',
        'aria-label': 'Nuxt zodI18n on GitHub'
      }
    ]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/xibman/nuxt-zod-i18n/docs/edit/main/content',
      links: [
        {
          icon: 'i-heroicons-star',
          label: 'Star on GitHub',
          to: 'https://github.com/xibman/nuxt-zod-i18n',
          target: '_blank'
        }
      ]
    }
  }
})
