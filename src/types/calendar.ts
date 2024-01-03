import { Result } from 'ts-results';
import { Schedule, ScheduleSchema } from '@/types/schedule';
import { z } from 'zod';
import { ScheduleForm } from '@/types/scheduleForm';

export interface ApiAdapter {
  get(): Promise<Result<Calendar, Error>>;
  schedule: {
    get(id: Schedule['id']): Promise<Result<Schedule, Error>>;
    getAll(): Promise<Result<Schedule[], Error>>;
    update(schedule: ScheduleForm | Schedule): Promise<Result<void, Error>>;
    remove(id: string): Promise<Result<void, Error>>;
  };
  // peaceOfMind: {
  //   getAll(): Result<PeaceOfMind[], Error>;
  //   get(date: Date): Result<number, Error>;
  //   add(peaceOfMind: PeaceOfMind): Result<void, Error>;
  //   remove(date: Date): Result<void, Error>;
  // };
  clear(): Promise<Result<void, Error>>;
}

export const CalendarSchema = z.object({
  id: z.string(),
  schedules: ScheduleSchema.array(),
});

export type Calendar = z.infer<typeof CalendarSchema>;

export const calendarInit = (): Calendar => ({
  id: 'origin', // not used
  schedules: [],
});
