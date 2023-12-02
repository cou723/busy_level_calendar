import { z } from "zod";

export const DefaultSchema = z.object({
  id: z.string(),
  updateAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type Default = z.infer<typeof DefaultSchema>;
