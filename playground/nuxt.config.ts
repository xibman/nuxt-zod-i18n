export default defineNuxtConfig({
  modules: ["../src/module", "@nuxtjs/i18n", "@nuxt/ui"],
  devtools: { enabled: true },
  ui: {
    icons: {
      dynamic: true
    }

  },
  i18n: {
    defaultDirection: "ltr",
    defaultLocale: "en-GB",
    langDir: "./locales",
    lazy: true,
    locales: [
      {
        code: "en-GB",
        dir: "ltr",
        file: "en-GB.json",
        flag: "gb",
        isCatchallLocale: true,
        iso: "en-GB",
        name: "English",
      },
      {
        code: "fr-FR",
        dir: "ltr",
        file: "fr-FR.json",
        flag: "fr",
        iso: "fr-FR",
        name: "French",
      },
    ],
    strategy: "prefix_except_default",
    types: "composition",
  },
});
