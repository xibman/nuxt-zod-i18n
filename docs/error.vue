<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

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
      to: '/changelog',
    },
  ]
})

provide('navigation', navigation)
provide('links', links)
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
