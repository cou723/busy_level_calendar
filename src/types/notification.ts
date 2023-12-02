import { NotificationTypesSchema } from "@/types/notificationType";
import { Schedule, extractNonCompletedSchedules } from "@/types/schedule";
import { z } from "zod";

export const NotificationSchema = z.object({
  id: z.number().optional(), // 未使用
  title: z.string(),
  level: NotificationTypesSchema,
  message: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Notification = z.infer<typeof NotificationSchema>;

export function fromCalendar(schedules: Schedule[]): Notification[] {
  return extractNonCompletedSchedules(schedules).map((schedule) =>
    fromSchedule(schedule)
  );
}

function fromSchedule(schedule: Schedule): Notification {
  const now = new Date();

  return {
    title: "必要日数未記入",
    level: "warning",
    message: `予定(${schedule.title})に必要な日数が記録されていません`,
    createdAt: now,
    updatedAt: now,
  };
}
