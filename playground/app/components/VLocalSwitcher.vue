<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'
import type { DropdownItem } from '#ui/types'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const items = computed<DropdownItem[][]>(() => {
  const availableLocales = (locales.value as LocaleObject[]).filter(i => i.code !== locale.value)

  const data = availableLocales.map(({ code }) => {
    return {
      label: code,
      to: switchLocalePath(code),
      icon: `i-flag-${code.split('-')[1].toLowerCase()}-4x3`,

    }
  })

  return [data]
})
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
      color="neutral"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      <UIcon
        :name="`i-flag-${locale.split('-')[1].toLowerCase()}-4x3`"
        dynamic
      />
      {{ locale }}
    </UButton>

    <template #item="{ item }">
      <UIcon
        :name="item.icon"
        dynamic
      />
      <span class="truncate">{{ item.label }}</span>
    </template>
  </UDropdownMenu>
</template>
