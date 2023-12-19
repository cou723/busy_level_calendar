import { Default, DefaultSchema } from "@/types/defaultSchema";
import { ScheduleForm } from "@/types/scheduleForm";
import { subDays } from "date-fns";
import { v4 } from "uuid";
import { z } from "zod";

export const ScheduleSchema = DefaultSchema.extend({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  requiredDays: z.number().optional().nullable(),
  userId: z.string(),
});

export type Schedule = z.infer<typeof ScheduleSchema>;
export type ScheduleWithoutDefault = Omit<Schedule, keyof Default>;

export function extractNonCompletedSchedules(schedules: Schedule[]): Schedule[] {
  return schedules.filter((schedule) => schedule.requiredDays == undefined);
}

export function generate({ title, description, date, requiredDays }: ScheduleForm, id?: Schedule["id"]): Schedule {
  return {
    id: id ?? v4(),
    title,
    description: description ?? "",
    date,
    requiredDays,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "",
  };
}

export function getAllDatesUntilSchedule(schedule: Schedule): Date[] {
  if (schedule.requiredDays == undefined) {
    return [];
  }
  const result: Date[] = [];
  for (let i = 0; i < schedule.requiredDays; i++) {
    result.push(subDays(schedule.date, i));
  }
  return result;
}
