import { Calendar, ApiAdapter, CalendarSchema, calendarInit } from '@/types/calendar';
import { Schedule } from '@/types/schedule';
import { jsonParse } from '@/utils/jsonParse';
import { LocalStorage } from '@/utils/localStorage';
import { parseBySchema } from '@/utils/parseBySchema';
import { Err, Ok, Result } from 'ts-results';

export class LocalStorageAdapter implements ApiAdapter {
  static key: string = 'busyLevelCalendar';

  schedule = {
    get: async (id: Schedule['id']): Promise<Result<Schedule, Error>> => {
      const calendar = await this.get();
      if (calendar.err) return Err(calendar.val);

      const schedule = calendar.val.schedules.find((e) => e.id == id);
      if (schedule === undefined) return Err(new Error('not found'));
      return Ok(schedule);
    },

    getAll: async (): Promise<Result<Schedule[], Error>> => {
      const calendar = await this.get();
      if (calendar.err) return Err(calendar.val);

      return Ok(calendar.val.schedules);
    },

    update: async (schedule: Schedule): Promise<Result<void, Error>> => {
      const calendar = await this.get();
      if (calendar.err) return Err(calendar.val);

      if (!(await this.schedule.get(schedule.id)).err) {
        await this.schedule.edit(schedule);
        return Ok.EMPTY;
      }

      calendar.val.schedules.push(schedule);
      LocalStorage.set(LocalStorageAdapter.key, JSON.stringify(calendar.val));
      return Ok.EMPTY;
    },

    remove: async (id: string): Promise<Result<void, Error>> => {
      const calendar = await this.get();
      if (calendar.err) return Err(calendar.val);

      calendar.val.schedules = calendar.val.schedules.filter((e) => e.id !== id);
      LocalStorage.set(LocalStorageAdapter.key, JSON.stringify(calendar.val));
      return Ok.EMPTY;
    },

    edit: async (target: Schedule): Promise<Result<void, Error>> => {
      const calendar = await this.get();
      if (calendar.err) return Err(calendar.val);

      calendar.val.schedules = calendar.val.schedules.map((dist) => (dist.id === target.id ? target : dist));
      LocalStorage.set(LocalStorageAdapter.key, JSON.stringify(calendar.val));
      return Ok.EMPTY;
    },
  };

  // 初期値の場合はcalendarの初期状態のオブジェクトを返す
  get = async (): Promise<Result<Calendar, Error>> => {
    const res = LocalStorage.get(LocalStorageAdapter.key);
    if (res.err) return Err(res.val);

    let calendar;
    if (res.val === '') calendar = Ok(calendarInit());
    else calendar = jsonParse(res.val);
    if (calendar.err) return Err(calendar.val);

    return parseBySchema({ schema: CalendarSchema, target: calendar.val });
  };

  clear = async (): Promise<Result<void, Error>> => {
    LocalStorage.set(LocalStorageAdapter.key, '');
    return Ok.EMPTY;
  };
}
