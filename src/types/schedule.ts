import { subDays } from 'date-fns';
import { Err, Ok } from 'ts-results';
import { v4 } from 'uuid';
import { z } from 'zod';

import type { Default } from '@/types/defaultSchema';
import type { ScheduleForm } from '@/types/scheduleForm';
import type { User } from '@prisma/client';
import type { calendar_v3 } from 'googleapis';
import type { Result } from 'ts-results';

import { DefaultSchema } from '@/types/defaultSchema';
import { nullToUndefined } from '@/utils/nullToUndefined';

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
  const date = schedule.date.toISOString().split('T')[0];
  if (date == undefined) throw new Error('date is undefined');
  // if (date instanceof Date) throw new Error('date is not Date');
  return {
    title: schedule.title,
    description: nullToUndefined(schedule.description),
    date: new Date(schedule.date.toISOString().split('T')[0]),
    requiredDays: nullToUndefined(schedule.requiredDays),
  };
}

const ConversableGoogleEventSchema = z.object({
  summary: z.string(),
  description: z.string().nullable().optional(),
  start: z.object({
    date: z.string().optional(),
    dateTime: z.string().optional(),
  }),
});

export function toSchedule(event: calendar_v3.Schema$Event, userId: string): Result<ScheduleWithoutDefault, string> {
  const parseResult = ConversableGoogleEventSchema.safeParse(event);

  if (parseResult.success == false) return Err('Invalid event');

  if (parseResult.data.start.date == undefined && parseResult.data.start.dateTime == undefined)
    return Err('Invalid event');

  return Ok({
    title: parseResult.data.summary,
    description: parseResult.data.description,
    // dateまたはdateTimeがundefinedでないことは上のif文で保証されている
    date: new Date((parseResult.data.start.date ?? parseResult.data.start.dateTime)!),
    requiredDays: null,
    userId,
  });
}

// Scheduleにできないeventは無視する
export function toSchedules(events: calendar_v3.Schema$Event[], userId: User['id']): ScheduleWithoutDefault[] {
  const result: ScheduleWithoutDefault[] = [];

  events.forEach((event) => {
    const parsed = toSchedule(event, userId);
    if (parsed.ok) {
      result.push(parsed.val);
    }
  });

  return result;
}
