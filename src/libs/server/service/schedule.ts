import { ScheduleWithoutDefault } from '@/types/schedule';
import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { User } from '@/types/user';
import { tryCatchToResult } from '@/utils/resultToTryCatch';
import { db } from '@/utils/server/db';
import { Schedule } from '@prisma/client';
import { NextResponse } from 'next/server';
import { Err, Ok, Result } from 'ts-results';

export const schedule = {
  async create(userId: User['id'], schedule: ScheduleWithoutDefault): Promise<NextResponse<Schedule | ErrorResponse>> {
    const result = await tryCatchToResult(
      async () =>
        await db.schedule.create({
          data: {
            ...schedule,
            userId,
          },
        })
    );

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
};
