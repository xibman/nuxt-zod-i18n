<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
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
      to: '/changelog',
    },
  ]
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogSiteName: 'Nuxt zodi18n Documentation',
  twitterCard: 'summary_large_image',
  ogImage: './img/og-nuxt-zod-i18n.jpeg',
})

provide('navigation', navigation)
provide('links', links)
</script>

<template>
  <div>
    <Header :links="links" />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" :links="links" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
