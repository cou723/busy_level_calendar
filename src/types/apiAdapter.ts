import type { Calendar } from './calendar';
import type { Notification } from './notification';
import type { ImportEventOptions } from '@/types/importEventOptions';
import type { ScheduleForm } from '@/types/scheduleForm';
import type { Schedule } from '@prisma/client';
import type { Result } from 'ts-results';

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
  notification(): Promise<Result<Notification[], Error>>;
}
