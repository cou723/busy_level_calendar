import { User } from 'next-auth';
import { Ok, Err } from 'ts-results';
import { describe, it, expect } from 'vitest';

import { extractBody } from './extractScheduleData';

import type { ScheduleForm } from '@/types/scheduleForm';
import type { ErrorResponse } from '@/types/server/ErrorResponse';
import type { NextRequest, NextResponse } from 'next/server';
import type { Result } from 'ts-results';

import { scheduleFormSchema } from '@/types/scheduleForm';
import { makeErrorResponse } from '@/types/server/ErrorResponse';

describe('extractScheduleData', () => {
  const createMockRequest = (data: ScheduleForm): NextRequest => {
    const uint8array = new TextEncoder().encode(JSON.stringify(data));
    const readableStream = new ReadableStream({
      start(controller) {
        controller.enqueue(uint8array);
        controller.close();
      },
    });

    return { body: readableStream } as NextRequest;
  };

  it('正常系', async () => {
    // Arrange

    // データを作成します
    const scheduleFormData: ScheduleForm = {
      title: 'title',
      date: new Date('2021-01-01'),
      requiredDays: null,
      description: null,
    };
    // Act
    const result: Result<ScheduleForm, NextResponse<ErrorResponse>> = await extractBody(
      createMockRequest(scheduleFormData) as NextRequest,
      { id: '1' },
      scheduleFormSchema
    );

    // Assert
    expect(result).toBeInstanceOf(Ok);
    expect(result.ok).toBe(true);
    expect(result.val).toStrictEqual({ ...scheduleFormData, userId: '1' });
  });

  it('リクエストボディからread : エラーハンドリング', async () => {
    // Arrange
    const mockRequest = {
      body: {
        getReader() {
          throw new Error('test');
        },
      },
    } as unknown as NextRequest;

    // Act
    const result: Result<ScheduleForm, NextResponse<ErrorResponse>> = await extractBody(
      mockRequest,
      {
        id: '1',
      },
      scheduleFormSchema
    );

    // Assert
    expect(result).toBeInstanceOf(Err);
    expect(result.err).toBe(true);
  });

  // decoder.decode()で例外をはかせる方法がわからないので、コメントアウト
  // 以下の例だとエラーせずに不明な文字でデコードされる

  // it('リクエストボディ Uint8Array -> String  : エラーハンドリング', async () => {
  //   // Arrange
  //   const mockRequest = {
  //     body: {
  //       getReader() {
  //         return {
  //           read() {
  //             return { value: new Uint8Array([0x80, 0x80, 0x80, 0x80]) };
  //           },
  //         };
  //       },
  //     },
  //   } as unknown as NextRequest;

  //   // Act
  //   const result: Result<ScheduleWithoutDefault, NextResponse<ErrorResponse>> = await extractScheduleData(mockRequest, {
  //     id: '1',
  //   });

  //   const errorBody = await (result.val as NextResponse).body?.getReader().read();

  //   // Assert
  //   expect(result).toBeInstanceOf(Err);
  //   expect(result.err).toBe(true);
  //   console.log(new TextDecoder().decode(errorBody?.value));
  // });

  it('リクエストボディ String -> JSON : エラーハンドリング', async () => {
    // Arrange
    const mockRequest = {
      body: {
        getReader() {
          return {
            read() {
              return { value: new TextEncoder().encode('String that cannot be converted into json') };
            },
          };
        },
      },
    } as unknown as NextRequest;

    // Act
    const result: Result<ScheduleForm, NextResponse<ErrorResponse>> = await extractBody(
      mockRequest,
      {
        id: '1',
      },
      scheduleFormSchema
    );

    const errorBody = await (result.val as NextResponse).body?.getReader().read();

    // Assert
    expect(result).toBeInstanceOf(Err);
    expect(result.err).toBe(true);
    expect(new TextDecoder().decode(errorBody?.value)).toBe('Unexpected token S in JSON at position 0');
  });

  it('リクエストボディ JSON -> ScheduleForm : エラーハンドリング', async () => {
    // Arrange
    const mockRequest = {
      body: {
        getReader() {
          return {
            read() {
              return { value: new TextEncoder().encode(JSON.stringify({})) };
            },
          };
        },
      },
    } as unknown as NextRequest;

    // Act
    const result: Result<ScheduleForm, NextResponse<ErrorResponse>> = await extractBody(
      mockRequest,
      {
        id: '1',
      },
      scheduleFormSchema
    );

    const errorBody = await (result.val as NextResponse).body?.getReader().read();

    // Assert
    expect(result).toBeInstanceOf(Err);
    expect(result.err).toBe(true);
    expect(JSON.parse(new TextDecoder().decode(errorBody?.value))).toStrictEqual([
      {
        code: 'invalid_type',
        expected: 'string',
        message: 'Required',
        path: ['title'],
        received: 'undefined',
      },
      {
        code: 'invalid_date',
        message: 'Invalid date',
        path: ['date'],
      },
    ]);
  });
});
