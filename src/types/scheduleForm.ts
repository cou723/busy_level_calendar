import { z } from "zod";

export const scheduleFormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  date: z.coerce.date(),
  requiredDays: z.number().positive().int().min(1).optional(),
});

export type ScheduleForm = z.infer<typeof scheduleFormSchema>;
