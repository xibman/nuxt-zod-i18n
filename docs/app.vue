<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
})

const links = computed(() => {
  return [
    {
      label: 'Documentation',
      icon: 'i-heroicons-book-open-solid',
      to: '/getting-started',
    },
    {
      label: 'Playground',
      icon: 'i-simple-icons-stackblitz',
      to: '/playground',
    },
    {
      label: 'Releases',
      icon: 'i-heroicons-rocket-launch-solid',
      to: 'https://github.com/xibman/nuxt-zod-i18n/releases',
      target: '_blank',
    },
  ]
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  ogSiteName: 'Nuxt zodi18n Documentation',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nuxt zodi18n Documentation',
  twitterDescription: 'Nuxt zodi18n Documentation',
  ogImage: 'https://xibman-nuxt-zod-i18n.nuxt.space/img/og-nuxt-zod-i18n.jpeg',
  twitterImage: 'https://xibman-nuxt-zod-i18n.nuxt.space/img/og-nuxt-zod-i18n.jpeg',
  ogUrl: '[og:url]',
})

provide('navigation', navigation)
provide('files', files)
provide('links', links)
</script>

<template>
  <div>
    <TheHeader :links="links" />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <TheFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        :links="links"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
