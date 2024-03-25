import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const callsSchema = z.object({
  id: z.string(),
  date: z.coerce.date(),
  time: z.string(),
  duration: z.string(),
  satisfaction: z.string(),
  script: z.string(),
})

export type Calls = z.infer<typeof callsSchema>