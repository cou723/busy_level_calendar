import { DefaultSchema } from "@/types/defaultSchema";
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

export function create({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: Date;
}): Schedule {
  return {
    id: v4(),
    title,
    description,
    date,
    createdAt: new Date(),
    updateAt: new Date(),
  };
}
