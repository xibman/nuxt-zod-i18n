// eslint-disable-next-line import/named
import { UButton } from '#components'

// Expose Nuxt UI components to Nuxt Content
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('UButton', UButton)
})
