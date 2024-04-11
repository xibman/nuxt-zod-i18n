import { z } from 'zod'

export const loginSchema = z.object({
  name: z.string().min(5).max(15),
  email: z.string().email().min(1),
})

export type LoginDto = z.input<typeof loginSchema>
