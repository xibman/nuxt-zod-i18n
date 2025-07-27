<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
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
])
</script>

<template>
  <UNavigationMenu
    :items="items"
    class="w-full justify-center"
  />
</template>
