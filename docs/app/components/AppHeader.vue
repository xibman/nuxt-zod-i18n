<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { breakpointsTailwind } from '@vueuse/core'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()

const breakpoints = useBreakpoints(
  breakpointsTailwind,
  { ssrWidth: 768 }, // Will enable SSR mode and render like if the screen was 768px wide
)
const lgAndSmaller = breakpoints.smallerOrEqual('lg')
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="header?.to || '/'"
  >
    <TopMenu />

    <template #title>
      <UColorModeImage
        v-if="header?.logo?.dark || header?.logo?.light"
        :light="header?.logo?.light!"
        :dark="header?.logo?.dark!"
        :alt="header?.logo?.alt"
        class="h-6 w-auto shrink-0 pr-2"
      />
      Nuxt <span class="text-primary">zodI18n</span>
    </template>

    <template #right>
      <UContentSearchButton :collapsed="lgAndSmaller" />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
