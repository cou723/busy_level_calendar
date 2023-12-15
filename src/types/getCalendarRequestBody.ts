import { z } from "zod";

export const GetCalendarRequestBodySchema = z.object({
  token: z.string(),
});

export type GetCalendarRequestBody = z.infer<
  typeof GetCalendarRequestBodySchema
>;
