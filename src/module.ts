import { readdir } from 'node:fs/promises'
import { defu } from 'defu'
import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  isNuxtMajorVersion,
  useLogger,
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
    const logger = useLogger('zodI18n')

    let i18nOptions: NuxtI18nOptions | null = null

    // Check NuxtI18n module availability
    const checkI18nAvailable = !nuxt.options.modules.some((module) => {
      const i18nModuleNames = ['@nuxtjs/i18n', '@nuxtjs/i18n-edge']
      if (typeof module === 'string') {
        const isRegistered = i18nModuleNames.includes(module)
        if (isRegistered) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          i18nOptions = (nuxt.options as any).i18n
        }
        return isRegistered
      }
      if (Array.isArray(module)) {
        const [moduleName, options] = module
        const isRegistered = i18nModuleNames.includes(moduleName as string)
        if (isRegistered) {
          i18nOptions = options
        }
        return isRegistered
      }

      return false
    })

    if (checkI18nAvailable) {
      logger.fatal('Nuxt I18n required')
    }

    if (!isNuxtMajorVersion(3, nuxt)) {
      logger.error('Nuxt 3 required')
    }

    if (options.useModuleLocale) {
      const appLocalesCode = getNormalizedLocales(
        i18nOptions && (i18nOptions as NuxtI18nOptions)?.locales
          ? (i18nOptions as NuxtI18nOptions).locales
          : [],
      ).map(({ code }) => code)

      const languageFiles = await readdir(resolve('./runtime/locales'))

      const locales = languageFiles.reduce<LocaleObject[]>((acc, file) => {
        const code
          = options.localeCodesMapping?.[file.replace('.json', '')]
          || file.replace('.json', '')
        if (appLocalesCode.includes(code)) {
          acc.push({ file, code })
        }

        return acc
      }, [])

      nuxt.hook('i18n:registerModule', (register) => {
        register({
          langDir: resolve('./runtime/locales'),
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
