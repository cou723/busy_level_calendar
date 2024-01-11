import { format } from 'date-fns';
import { z } from 'zod';

import type { Schedule} from '@/types/schedule';

import { extractNonCompletedSchedules } from '@/types/schedule';
import { ScheduleAlertTypesSchema } from '@/types/scheduleAlertType';

export const ScheduleAlertSchema = z.object({
  id: z.number().optional(), // 未使用
  title: z.string(),
  level: ScheduleAlertTypesSchema,
  message: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  target: z.string(),
});

export type ScheduleAlert = z.infer<typeof ScheduleAlertSchema>;

export function extractFromCalendar(schedules: Schedule[]): ScheduleAlert[] {
  return extractNonCompletedSchedules(schedules).map((schedule) => extractFromSchedule(schedule));
}

export function extractFromSchedule(schedule: Schedule): ScheduleAlert {
  const now = new Date();

  return {
    title: '必要日数未記入',
    level: 'warning',
    message: `予定(${schedule.title}: ${format(schedule.date, 'yyyy/MM/dd')})に必要な日数が記録されていません`,
    createdAt: now,
    updatedAt: now,
    target: schedule.id,
  };
}
