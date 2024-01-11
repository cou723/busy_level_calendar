import { Err } from 'ts-results';

import type { ErrorResponse} from '@/types/server/ErrorResponse';
import type { NextResponse } from 'next/server';
import type { User } from 'next-auth';
import type { Result} from 'ts-results';

import { checkSession } from '@/libs/server/checkSession';
import { makeErrorResponse } from '@/types/server/ErrorResponse';



export async function getUserData(): Promise<Result<User, NextResponse<ErrorResponse>>> {
  const user = await checkSession();
  if (user.err) {
    if (user.val.status === 401) return Err(user.val);
    return Err(makeErrorResponse(500, 'getServerSessionでuserが取得できませんでした'));
  }
  return user;
}
