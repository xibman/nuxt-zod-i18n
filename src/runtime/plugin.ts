import type { Composer } from 'vue-i18n'
import { defaultErrorMap, z, ZodIssueCode, ZodParsedType } from 'zod'
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
    const { t, d } = i18n

    const errorMap: z.ZodErrorMap = (error, ctx) => {
      let message: string

      message = defaultErrorMap(error, ctx).message

      switch (error.code) {
        case ZodIssueCode.invalid_type:
          if (error.received === ZodParsedType.undefined) {
            message = t('zodI18n.errors.invalid_type_received_undefined')
          }
          else {
            message = t('zodI18n.errors.invalid_type', {
              expected: error.expected,
              received: error.received,
            })
          }
          break
        case ZodIssueCode.invalid_literal:
          message = t('zodI18n.errors.invalid_literal', {
            expected: JSON.stringify(error.expected, jsonStringifyReplacer),
          })
          break
        case ZodIssueCode.unrecognized_keys:
          message = t('zodI18n.errors.unrecognized_keys', {
            keys: joinValues(error.keys, ', '),
          })
          break
        case ZodIssueCode.invalid_union:
          message = t('zodI18n.errors.invalid_union')
          break
        case ZodIssueCode.invalid_union_discriminator:
          message = t('zodI18n.errors.invalid_union_discriminator', {
            options: joinValues(error.options),
          })
          break
        case ZodIssueCode.invalid_enum_value:
          message = t('zodI18n.errors.invalid_enum_value', {
            options: joinValues(error.options),
            received: error.received,
          })
          break
        case ZodIssueCode.invalid_arguments:
          message = t('zodI18n.errors.invalid_arguments')
          break
        case ZodIssueCode.invalid_return_type:
          message = t('zodI18n.errors.invalid_return_type')
          break
        case ZodIssueCode.invalid_date:
          message = t('zodI18n.errors.invalid_date')
          break
        case ZodIssueCode.invalid_string:
          if (typeof error.validation === 'object') {
            if ('startsWith' in error.validation) {
              message = t('zodI18n.errors.invalid_string.startsWith', {
                startsWith: error.validation.startsWith,
              })
            }
            else if ('endsWith' in error.validation) {
              message = t('zodI18n.errors.invalid_string.endsWith', {
                endsWith: error.validation.endsWith,
              })
            }
          }
          else {
            message = t(`zodI18n.errors.invalid_string.${error.validation}`, {
              validation: t(`zodI18n.validations.${error.validation}`),
            })
          }
          break
        case ZodIssueCode.too_small:
          message = t(
            `zodI18n.errors.too_small.${error.type}.${
              error.exact ? 'exact' : error.inclusive ? 'inclusive' : 'not_inclusive'
            }`,
            {
              minimum: error.type === 'date' ? d(new Date(error.minimum as number), dateFormat) : error.minimum,
            },
          )
          break
        case ZodIssueCode.too_big:
          message = t(
            `zodI18n.errors.too_big.${error.type}.${
              error.exact ? 'exact' : error.inclusive ? 'inclusive' : 'not_inclusive'
            }`,
            {
              maximum: error.type === 'date' ? d(new Date(error.maximum as number), dateFormat) : error.maximum,
            },
          )
          break
        case ZodIssueCode.custom:
          // eslint-disable-next-line no-case-declarations
          const { key, values } = getKeyAndValues(error.params?.i18n, 'zodI18n.errors.custom', i18n)

          message = t(key, values)
          break
        case ZodIssueCode.invalid_intersection_types:
          message = t('zodI18n.errors.invalid_intersection_types')
          break
        case ZodIssueCode.not_multiple_of:
          message = t('zodI18n.errors.not_multiple_of', {
            multipleOf: error.multipleOf,
          })
          break
        case ZodIssueCode.not_finite:
          message = t('zodI18n.errors.not_finite')
          break
        default:
          break
      }

      return { message }
    }

    z.setErrorMap(errorMap)
  },
})
