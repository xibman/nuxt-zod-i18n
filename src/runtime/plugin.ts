import type { Composer } from 'vue-i18n'
import { z, locales } from 'zod'
import type { $ZodStringFormatIssues } from 'zod/v4/core'
import { joinValues, jsonStringifyReplacer, getKeyAndValues } from './utils'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin({
  name: 'zodI18n:plugin',
  // @ts-expect-error plugin from @nuxt/i18n
  dependsOn: ['i18n:plugin'],
  parallel: true,
  setup: (nuxtApp) => {
    const { dateFormat } = useRuntimeConfig().public.zodI18n
    const i18n = nuxtApp.$i18n as Composer
    const { t, d, locale } = i18n

    const errorMap: z.core.$ZodErrorMap = (error) => {
      const zodLocale = (locales[locale.value as keyof typeof locales] || locales.en)()
      let message = zodLocale.localeError(error)

      switch (error.code) {
        case 'invalid_type':
          if (error.input === undefined) {
            message = t('zodI18n.errors.invalid_type_received_undefined')
          }
          else {
            message = t('zodI18n.errors.invalid_type', {
              expected: t(`zodI18n.types.${error.expected}`),
              received: t(`zodI18n.types.${error.input}`),
            })
          }
          break
        case 'invalid_value':
          if (error.values.length === 1) {
            message = t('zodI18n.errors.invalid_literal', {
              expected: JSON.stringify(error.values[0], jsonStringifyReplacer),
            })
            break
          }

          message = t('zodI18n.errors.invalid_enum_value', {
            options: joinValues(error.values),
            received: error.input,
          })
          break
        case 'unrecognized_keys':
          message = t('zodI18n.errors.unrecognized_keys', {
            keys: joinValues(error.keys, ', '),
          })
          break
        case 'invalid_union':
          message = t('zodI18n.errors.invalid_union')
          break
        case 'invalid_format': {
          const _issue = error as $ZodStringFormatIssues

          if (_issue.format === 'starts_with') {
            message = t('zodI18n.errors.invalid_string.startsWith', {
              startsWith: _issue.prefix,
            })
            break
          }

          if (_issue.format === 'ends_with') {
            message = t('zodI18n.errors.invalid_string.endsWith', {
              endsWith: _issue.suffix,
            })
            break
          }

          if (_issue.format === 'includes') {
            message = t('zodI18n.errors.invalid_string.includes', {
              includes: _issue.includes,
            })
            break
          }

          if (_issue.format === 'regex') {
            message = t('zodI18n.errors.invalid_string.regex', {
              pattern: _issue.pattern,
            })
            break
          }

          message = t(`zodI18n.errors.invalid_string.${_issue.format}`, {
            validation: t(`zodI18n.validations.${_issue.format}`),
          })
          break
        }
        case 'too_small':
          message = t(
            `zodI18n.errors.too_small.${error.origin}.${
              error.exact ? 'exact' : error.inclusive ? 'inclusive' : 'not_inclusive'
            }`,
            {
              minimum: error.origin === 'date' ? d(new Date(error.minimum as number), dateFormat) : error.minimum,
            },
          )
          break
        case 'too_big':
          message = t(
            `zodI18n.errors.too_big.${error.origin}.${
              error.exact ? 'exact' : error.inclusive ? 'inclusive' : 'not_inclusive'
            }`,
            {
              maximum: error.origin === 'date' ? d(new Date(error.maximum as number), dateFormat) : error.maximum,
            },
          )
          break
        case 'custom':
          // eslint-disable-next-line no-case-declarations
          const { key, values } = getKeyAndValues(error.params?.i18n, 'zodI18n.errors.custom', i18n)

          message = t(key, values)
          break
        case 'not_multiple_of':
          message = t('zodI18n.errors.not_multiple_of', {
            multipleOf: error.divisor,
          })
          break
        case 'invalid_element':
          message = t('zodI18n.errors.invalid_element', {
            origin: error.origin,
          })
          break
        case 'invalid_key':
          message = t('zodI18n.errors.invalid_key', {
            origin: error.origin,
          })
          break
        default:
          break
      }

      return message
    }

    z.config({ customError: errorMap })
  },
})
