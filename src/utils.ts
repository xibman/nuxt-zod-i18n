import type { NuxtI18nOptions, LocaleObject } from '@nuxtjs/i18n'

export const isString = (val: unknown): val is string =>
  typeof val === 'string'

export function getNormalizedLocales(locales: NuxtI18nOptions['locales']): LocaleObject[] {
  locales = locales || []
  const normalized: LocaleObject[] = []
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale, language: locale })
    }
    else {
      normalized.push(locale)
    }
  }
  return normalized
}
