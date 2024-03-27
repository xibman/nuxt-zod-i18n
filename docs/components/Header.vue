<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()
const { metaSymbol } = useShortcuts()
const links = inject<Ref<any[]>>('links')

</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto pr-2', ...header?.logo }" />
        Nuxt <span class="text-primary">zodI18n</span>
      </template>
      <template v-else>
        <UBadge label="Docs" variant="subtle" class="mb-0.5" />
      </template>
    </template>

    <template #right>
      <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
        <UContentSearchButton label="Search..." />
      </UTooltip>

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
v-for="(link, index) of header.links" :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }" />
      </template>
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider type="dashed" class="mt-4 mb-3" />

      <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open />
    </template>
  </UHeader>
</template>
