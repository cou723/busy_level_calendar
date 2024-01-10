import { validateOptions } from '@/libs/server/service/validateOptions';
import { GoogleCalendarEventToScheduleForm } from '@/libs/googleCalendar';
import { ImportEventOptions } from '@/types/importEventOptions';
import { ScheduleWithoutDefault } from '@/types/schedule';
import { ScheduleForm } from '@/types/scheduleForm';
import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { User } from '@/types/user';
import { tryCatchToResult } from '@/utils/resultToTryCatch';
import { db } from '@/utils/server/db';
import { Schedule } from '@prisma/client';
import { calendar_v3 } from 'googleapis';
import { NextResponse } from 'next/server';
import { Err, Ok, Result } from 'ts-results';
import { fetchCalendars } from './fetchCalendars';
import { fetchGoogleEvents } from './fetchGoogleEvents';
export type Calendar = calendar_v3.Calendar;
type GoogleImportArgs = { from: 'google'; userId: string; accessToken: string; options: ImportEventOptions };
type ImportArgs = GoogleImportArgs;

export const schedule = {
  async _create(userId: User['id'], schedule: ScheduleForm): Promise<Result<Schedule, ErrorResponse>> {
    return await tryCatchToResult(
      async () =>
        await db.schedule.create({
          data: {
            ...schedule,
            userId,
          },
        })
    );
  },

  async create(userId: User['id'], schedule: ScheduleForm): Promise<NextResponse<Schedule | ErrorResponse>> {
    const result = await this._create(userId, schedule);

    if (result.err) {
      return makeErrorResponse(500, 'scheduleの作成に失敗しました: ' + result.val.message);
    }
    return NextResponse.json(result.val, { status: 201 });
  },

  async update(
    userId: User['id'],
    scheduleId: Schedule['id'],
    schedule: ScheduleWithoutDefault
  ): Promise<NextResponse<Schedule | ErrorResponse>> {
    const result = await tryCatchToResult(
      async () =>
        await db.schedule.update({
          where: { id: scheduleId, userId: userId },
          data: { ...schedule },
        })
    );

    if (result.err) {
      return makeErrorResponse(500, 'scheduleの更新に失敗しました: ' + result.val.message);
    }
    return NextResponse.json(result.val, { status: 200 });
  },

  async delete(userId: User['id'], id: Schedule['id']): Promise<Response> {
    const result = await tryCatchToResult(
      async () =>
        await db.schedule.delete({
          where: {
            id,
            userId: userId,
          },
        })
    );

    if (result.err) {
      return makeErrorResponse(500, 'scheduleの削除に失敗しました: ' + result.val.message);
    }
    return new Response(null, {
      status: 204,
    });
  },

  async get(userId: User['id'], id: Schedule['id']): Promise<NextResponse<Schedule | ErrorResponse>> {
    const result = await this.getResult(userId, id);
    if (result.err) return result.val;
    return NextResponse.json(result.val, { status: 200 });
  },

  async getResult(userId: User['id'], id: Schedule['id']): Promise<Result<Schedule, NextResponse<ErrorResponse>>> {
    const result = await tryCatchToResult(async () => {
      return await db.schedule.findFirst({
        where: { id, userId: userId },
      });
    });

    if (result.err) {
      return Err(makeErrorResponse(500, `scheduleの取得に失敗しました: ${result.val.message}`));
    }
    if (result.val == null) {
      return Err(makeErrorResponse(404, 'scheduleが見つかりませんでした'));
    }

    return Ok(result.val);
  },

  async getAll(userId: User['id']): Promise<Result<Schedule[], NextResponse<ErrorResponse>>> {
    const result = await tryCatchToResult(async () => {
      return await db.schedule.findMany({
        where: { userId },
      });
    });

    if (result.err) {
      return Err(makeErrorResponse(500, `scheduleの取得に失敗しました: ${result.val.message}`));
    }
    if (result.val == null) {
      return Err(makeErrorResponse(404, 'scheduleが見つかりませんでした'));
    }
    return Ok(result.val);
  },

  async import({ from: _from, userId, accessToken, options }: ImportArgs): Promise<Result<void, string>> {
    const validateResult = validateOptions(options);
    if (validateResult.err) return Err(validateResult.val);

    const calendar: Calendar = fetchCalendars(accessToken);
    const events: calendar_v3.Schema$Event[] = await fetchGoogleEvents(options, calendar);

    for (const event of events) {
      const resultResponse = await schedule._create(userId, GoogleCalendarEventToScheduleForm(event));
      if (resultResponse.err) return Err(resultResponse.val.message);
    }

    return Ok.EMPTY;
  },
};
