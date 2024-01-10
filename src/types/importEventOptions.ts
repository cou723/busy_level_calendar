import { z } from 'zod';

export const ImportEventOptionsSchema = z.object({
  calendars: z.string().array(),
  onlyAllDay: z.boolean(),
  range: z.object({
    start: z.coerce.date(),
    end: z.coerce.date(),
  }),
});

export type ImportEventOptions = z.infer<typeof ImportEventOptionsSchema>;
