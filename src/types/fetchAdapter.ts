import { NextResponse } from 'next/server';
import { Err, Ok } from 'ts-results';

import type { ApiAdapter } from './apiAdapter';
import type { Calendar } from '@/types/calendar';
import type { ImportEventOptions } from '@/types/importEventOptions';
import type { ScheduleForm } from '@/types/scheduleForm';
import type { Schedule } from '@prisma/client';
import type { Result } from 'ts-results';

import apiEndpoints from '@/libs/apiEndpoints';
import { CalendarSchema } from '@/types/calendar';
import { NotificationSchema, type Notification } from '@/types/notification';
import { ScheduleSchema, isSchedule, toScheduleForm } from '@/types/schedule';
import { fetch } from '@/utils/fetch';
import { isSuccessStatus as isStatusSuccess } from '@/utils/isSuccessStatus';
import { parseBySchema } from '@/utils/parseBySchema';

async function createError(errorResponse: Response): Promise<Error> {
  const errorBody = await errorResponse.text();
  return new Error(errorBody);
}

export class FetchAdapter implements ApiAdapter {
  schedule = {
    getAll: async (): Promise<Result<Schedule[], Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.getAll}`, { credentials: 'include' });

      if (res.err) return Err(res.val);
      if (!isStatusSuccess(res.val.status)) return Err(new Error(JSON.stringify(res.val)));

      return parseBySchema({ target: await res.val.json(), schema: ScheduleSchema.array() });
    },

    get: async (id: Schedule['id']): Promise<Result<Schedule, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.get.replace(':id', id)}`, { credentials: 'include' });

      if (res.err) return Err(res.val);
      if (!isStatusSuccess(res.val.status)) return Err(new Error(JSON.stringify(res.val)));

      return parseBySchema({ schema: ScheduleSchema, target: await res.val.json() });
    },

    update: async (schedule: Schedule | ScheduleForm): Promise<Result<void, Error>> => {
      if (isSchedule(schedule)) {
        return await this.schedule.edit(schedule.id, toScheduleForm(schedule));
      }

      const res = await fetch(`${apiEndpoints.schedule.create}`, {
        method: 'PUT',
        body: JSON.stringify(schedule),
        credentials: 'include',
      });

      if (res.err) return Err(res.val);
      if (res.val.status !== 201) return Err(await createError(res.val));

      return Ok.EMPTY;
    },

    remove: async (id: string): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.delete.replace(':id', id)}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (res.err) return Err(res.val);
      if (!isStatusSuccess(res.val.status)) return Err(await createError(res.val));

      return Ok.EMPTY;
    },

    edit: async (id: string, edited: ScheduleForm): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.update.replace(':id', id)}`, {
        method: 'PUT',
        body: JSON.stringify(edited),
        credentials: 'include',
      });

      if (res.err) return Err(res.val);
      if (!isStatusSuccess(res.val.status)) return Err(await createError(res.val));

      return Ok.EMPTY;
    },
  };

  // 初期値の場合はcalendarの初期状態のオブジェクトを返す 機能は未実装
  get = async (): Promise<Result<Calendar, Error>> => {
    const res = await fetch(`${apiEndpoints.calendar.get}`, { credentials: 'include' });

    if (res.err) return Err(res.val);
    if (res.val.status === 401) return Err(new Error('unauthorized'));
    if (!isStatusSuccess(res.val.status)) return Err(await createError(res.val));

    return parseBySchema({ schema: CalendarSchema, target: await res.val.json() });
  };

  importCalendar = async (options: ImportEventOptions): Promise<Result<void, Error>> => {
    const res = await fetch(`${apiEndpoints.import.fromGoogleCalendar}`, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(options),
    });

    if (res.err) return Err(res.val);
    console.log('status', res.val.status);
    if (res.val.status === 401) return Err(new Error('unauthorized'));
    if (!isStatusSuccess(res.val.status)) return Err(await createError(res.val));

    return Ok.EMPTY;
  };

  clear = async (): Promise<Result<void, Error>> => {
    const res = await fetch(`${apiEndpoints.calendar.get}`, { credentials: 'include', method: 'DELETE' });

    if (res.err) return Err(res.val);
    if (res.val.status === 401) return Err(new Error('unauthorized'));
    if (!isStatusSuccess(res.val.status)) return Err(await createError(res.val));
    return Ok.EMPTY;
  };
  notification = async (): Promise<Result<Notification[], Error>> => {
    const res = await fetch(`${apiEndpoints.notification}`);
    console.log('Error', res.val);

    if (res.err) return Err(res.val);
    if (!isStatusSuccess(res.val.status)) return Err(await createError(res.val));

    return parseBySchema({ schema: NotificationSchema.array(), target: await res.val.json() });
  };
}
