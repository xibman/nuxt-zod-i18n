<script setup>
const title = 'Playground'
const description = 'Play online with our interactive Nuxt zodI18n playground.'

useSeoMeta({
  title,
  ogTitle: 'Nuxt zodI18n playground',
  description,
})
</script>

<template>
  <div class="h-[calc(100vh-var(--header-height)-var(--header-height)-1px)]">
    <ClientOnly>
      <iframe
        src="https://stackblitz.com/github/xibman/nuxt-zod-i18n?embed=1&file=playground%2Fapp.vue"
        width="100%"
        height="100%"
      />
    </ClientOnly>
  </div>
</template>
