import { z } from 'zod'

export const userSchema = z.object({
  birthDate: z.coerce.date().max(new Date('1900-01-01')),
  email: z
    .string()
    .email()
    .refine(() => false, { params: { i18n: 'myCustomError' } }),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  preferredColor: z.string().refine(() => false, {
    params: {
      i18n: {
        key: 'myCustomErrorWithInterpolation',
        values: { first: 'colors.red', second: 'colors.green' },
      },
    },
  }),
})

export type userDto = z.input<typeof userSchema>
export type User = z.output<typeof userSchema>
