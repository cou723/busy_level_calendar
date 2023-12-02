import { z } from "zod";

export const scheduleFormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255).optional(),
  date: z.coerce.date(),
  requiredDays: z.number().optional(),
});

export type ScheduleForm = z.infer<typeof scheduleFormSchema>;
