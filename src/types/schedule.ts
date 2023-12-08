import { DefaultSchema } from "@/types/defaultSchema";
import { ScheduleForm } from "@/types/scheduleForm";
import { v4 } from "uuid";
import { z } from "zod";

export const ScheduleSchema = DefaultSchema.extend({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  requiredDays: z.number().optional(),
});

export type Schedule = z.infer<typeof ScheduleSchema>;

export function extractNonCompletedSchedules(
  schedules: Schedule[]
): Schedule[] {
  return schedules.filter((schedule) => schedule.requiredDays == undefined);
}

export function generate(
  { title, description, date, requiredDays }: ScheduleForm,
  id?: Schedule["id"]
): Schedule {
  return {
    id: id ?? v4(),
    title,
    description: description ?? "",
    date,
    requiredDays,
    createdAt: new Date(),
    updateAt: new Date(),
  };
}
