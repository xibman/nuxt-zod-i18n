---
title: Nuxt zodI18n
description: Welcome to Nuxt zodI18n documentation.
---

::u-page-hero{}
---
orientation: horizontal
---
<div>

  :::ProseH1
  Quick Setup
  :::

  :::prose-pre
  ---
  code: npx nuxi@latest module add nuxt-zod-i18n
  filename: Terminal
  ---
  ```bash
  npx nuxi@latest module add nuxt-zod-i18n
  ```
  :::

  :::prose-pre
  ---
  code: "export default defineNuxtConfig({\n  modules: ['nuxt-zod-i18n', '@nuxtjs/i18n'] \n})"
  filename: nuxt.config.ts
  ---
  ```ts
    export default defineNuxtConfig({
      modules: ['nuxt-zod-i18n', '@nuxtjs/i18n']
    })
  ```
  :::
</div>

#title
Nuxt [zodI18n]{.text-primary}

#description
Easily Translate Zod''s default error messages.

#links
  :::u-button
  ---
  size: xl
  to: /getting-started
  icon: i-heroicons-rocket-launch
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  target: _blank
  to: https://github.com/xibman/nuxt-zod-i18n
  variant: subtle
  ---
  Open on Github
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-stackblitz
  size: xl
  target: _blank
  to: https://stackblitz.com/github/xibman/nuxt-zod-i18n?file=playground%2Fapp.vue
  variant: subtle
  ---
  Playground
  :::
::

::u-page-section
#title
Translate zod error message easily

#features
  :::u-page-card{spotlight-color="primary" spotlight}
  ---
  icon: i-simple-icons-googletranslate
  target: _blank
  to: https://github.com/xibman/nuxt-zod-i18n/tree/main/src/runtime/i18n/locales
  ---
  #title
  i18n

  #description
  Multiple locale available
  :::

  :::u-page-card{spotlight-color="primary" spotlight}
  ---
  icon: i-simple-icons-nuxtdotjs
  target: _blank
  to: https://i18n.nuxtjs.org/
  ---
  #title
  Nuxt i18n

  #description
  Integration with nuxt/i18n
  :::

  :::u-page-card{spotlight-color="primary" spotlight}
  ---
  icon: i-heroicons-arrow-path-solid
  target: _blank
  to: https://ui.nuxt.com
  ---
  #title
  Nuxt UI

  #description
  Lazy-loading of translation messages
  :::
::
