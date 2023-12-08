import { Result } from "ts-results";
import { Schedule, ScheduleSchema } from "@/types/schedule";
import { z } from "zod";

export interface CalendarAdapter {
  get(): Result<Calendar, Error>;
  getSchedule(id: Schedule["id"]): Result<Schedule, Error>;
  add(schedule: Schedule): Result<void, Error>;
  remove(id: string): Result<void, Error>;
  clear(): Result<void, Error>;
}

export const CalendarSchema = z.object({
  id: z.literal("origin"),
  schedules: ScheduleSchema.array(),
});

export type Calendar = z.infer<typeof CalendarSchema>;

export const calendarInit = (): Calendar => ({
  id: "origin", // not used
  schedules: [],
});
