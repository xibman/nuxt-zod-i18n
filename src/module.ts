import { readdir } from 'node:fs/promises'
import { defu } from 'defu'
import {
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import type { NuxtI18nOptions, LocaleObject } from '@nuxtjs/i18n'
import { getNormalizedLocales } from './utils'

// Module options TypeScript interface definition
export interface ModuleOptions {
  useModuleLocale: boolean
  dateFormat: Intl.DateTimeFormatOptions
  localeCodesMapping?: Record<string, string>
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    zodI18n: {
      dateFormat: Intl.DateTimeFormatOptions
      localeCodesMapping: Record<string, string>
    }
  }
}

export default defineNuxtModule<ModuleOptions>().with({
  meta: {
    compatibility: {
      nuxt: '>=3.0.0',
    },
    name: 'nuxt-zod-i18n',
    configKey: 'zodI18n',
  },
  moduleDependencies: {
    '@nuxtjs/i18n': {
      version: '>=8',
    },
    '@nuxtjs/i18n-edge': {
      version: '>=8',
      optional: true,
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    useModuleLocale: true,
    dateFormat: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const i18nModuleNames = ['@nuxtjs/i18n', '@nuxtjs/i18n-edge']
    const i18nOptions = nuxt.options.modules.reduce<null | NuxtI18nOptions>((acc, module) => {
      if (acc) return acc

      if (typeof module === 'string' && i18nModuleNames.includes(module) && 'i18n' in nuxt.options) {
        return nuxt.options.i18n as NuxtI18nOptions
      }

      if (Array.isArray(module)) {
        const [moduleName, options] = module
        if (i18nModuleNames.includes(moduleName as string)) {
          return options
        }
      }

      return acc
    }, null)

    if (options.useModuleLocale) {
      const appLocalesCode = getNormalizedLocales(
        i18nOptions && (i18nOptions as NuxtI18nOptions)?.locales
          ? (i18nOptions as NuxtI18nOptions).locales
          : [],
      ).map(({ code }) => code)

      const languageFiles = await readdir(resolve('./runtime/i18n/locales'))

      const locales = languageFiles.reduce<LocaleObject[]>((acc, file) => {
        const code
          = options.localeCodesMapping?.[file.replace('.json', '')]
            || file.replace('.json', '')
        if (appLocalesCode.includes(code)) {
          acc.push({ file, code })
        }

        return acc
      }, [])

      // @ts-expect-error Module hook from @nuxtjs/i18n (see ModuleHooks type)
      nuxt.hook('i18n:registerModule', (register) => {
        register({
          langDir: resolve('./runtime/i18n/locales'),
          locales,
        })
      })
    }

    nuxt.options.runtimeConfig.public.zodI18n = defu(
      nuxt.options.runtimeConfig.public.zodI18n,
      {
        dateFormat: options.dateFormat as Intl.DateTimeFormatOptions,
        localeCodesMapping: options.localeCodesMapping,
      },
    )

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))
  },
})
