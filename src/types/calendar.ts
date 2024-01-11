import { z } from 'zod';

import type { ImportEventOptions } from '@/types/importEventOptions';
import type { Schedule} from '@/types/schedule';
import type { ScheduleForm } from '@/types/scheduleForm';
import type { Result } from 'ts-results';

import { ScheduleSchema } from '@/types/schedule';



export interface ApiAdapter {
  get(): Promise<Result<Calendar, Error>>;
  schedule: {
    get(id: Schedule['id']): Promise<Result<Schedule, Error>>;
    getAll(): Promise<Result<Schedule[], Error>>;
    update(schedule: ScheduleForm | Schedule): Promise<Result<void, Error>>;
    remove(id: string): Promise<Result<void, Error>>;
  };
  importCalendar(options: ImportEventOptions): Promise<Result<void, Error>>;
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
