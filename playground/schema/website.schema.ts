import { z } from 'zod'

export const websiteSchema = z.object({
  name: z.string().min(5).max(15),
  url: z.string().url().min(1)
})

export type WebsiteDto = z.input<typeof websiteSchema>;
