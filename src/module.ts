import { readdir } from "node:fs/promises";
import { defu } from "defu";

import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  isNuxt3,
  useLogger,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  dateFormat: Intl.DateTimeFormatOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    compatibility: {
      nuxt: "^3.0.0",
    },
    name: "nuxt-zod-i18n",
    configKey: "zodI18n",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    dateFormat: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const logger = useLogger("zodI18n");

    // Check NuxtI18n module availability
    const checkI18nAvailable = !nuxt.options.modules.some((module) => {
      const i18nModuleNames = ["@nuxtjs/i18n", "@nuxtjs/i18n-edge"];
      if (typeof module === "string") {
        return i18nModuleNames.includes(module);
      }
      if (Array.isArray(module)) {
        const [moduleName] = module;

        return i18nModuleNames.includes(moduleName as string);
      }

      return false;
    });

    if (checkI18nAvailable) {
      logger.error("Nuxt I18n required");
    }

    if (!isNuxt3()) {
      logger.error("Nuxt 3 required");
    }

    const languageFiles = await readdir(resolve("./locales"));

    nuxt.options.runtimeConfig.public.zodI18n = defu(
      nuxt.options.runtimeConfig.public.zodI18n,
      {
        dateFormat: options.dateFormat,
      }
    );

    // @ts-expect-error - type not good
    nuxt.hook("i18n:registerModule", (register) => {
      register({
        langDir: resolve("./locales"),
        locales: languageFiles.map((file) => ({
          file,
          code: file.replace(".json", ""),
        })),
      });
    });

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve("./runtime/plugin"));
  },
});

export interface ModulePublicRuntimeConfig {
  zodI18n: ModuleOptions;
}

declare module "@nuxt/schema" {
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}
