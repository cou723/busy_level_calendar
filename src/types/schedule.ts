import { Default, DefaultSchema } from '@/types/defaultSchema';
import { ScheduleForm } from '@/types/scheduleForm';
import { nullToUndefined } from '@/utils/nullToUndefined';
import { subDays } from 'date-fns';
import { v4 } from 'uuid';
import { z } from 'zod';

export const ScheduleSchema = DefaultSchema.extend({
  title: z.string(),
  description: z.string().nullable().optional(),
  date: z.coerce.date(),
  requiredDays: z.number().nullable().optional(),
  userId: z.string(),
});

export type Schedule = z.infer<typeof ScheduleSchema>;
export type ScheduleWithoutDefault = Omit<Schedule, keyof Default>;

export function extractNonCompletedSchedules(schedules: Schedule[]): Schedule[] {
  return schedules.filter((schedule) => schedule.requiredDays == undefined);
}

export function isSchedule(object: unknown): object is Schedule {
  return ScheduleSchema.safeParse(object).success;
}

export function generate({ title, description, date, requiredDays }: ScheduleForm, id?: Schedule['id']): Schedule {
  return {
    id: id ?? v4(),
    title,
    description: description ?? '',
    date,
    requiredDays,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: '',
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

export function toScheduleForm(schedule: Schedule): ScheduleForm {
  return {
    title: schedule.title,
    description: nullToUndefined(schedule.description),
    date: schedule.date.toISOString().split('T')[0] as unknown as Date,
    requiredDays: nullToUndefined(schedule.requiredDays),
  };
}
