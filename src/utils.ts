import type { NuxtI18nOptions } from '@nuxtjs/i18n'
import { isString } from '@intlify/shared'
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

export function getNormalizedLocales(locales: NuxtI18nOptions['locales']): LocaleObject[] {
  locales = locales || []
  const normalized: LocaleObject[] = []
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale, iso: locale })
    } else {
      normalized.push(locale)
    }
  }
  return normalized
}
