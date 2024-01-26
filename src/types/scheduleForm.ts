import { z } from 'zod';

export const scheduleFormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().nullable(),
  date: z.coerce.date(),
  requiredDays: z.number().positive().int().nullable(),
});

export type ScheduleForm = z.infer<typeof scheduleFormSchema>;
