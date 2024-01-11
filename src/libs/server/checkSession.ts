import { getServerSession } from 'next-auth';
import { Err, Ok } from 'ts-results';

import type { ErrorResponse} from '@/types/server/ErrorResponse';
import type { SessionUser } from '@/utils/server/next-auth';
import type { NextResponse } from 'next/server';
import type { Result } from 'ts-results';

import { options } from '@/app/options';
import { makeErrorResponse } from '@/types/server/ErrorResponse';



// this function is not return value. it call res.send().
export async function checkSession(): Promise<Result<SessionUser, NextResponse<ErrorResponse>>> {
  const session = await getServerSession(options);

  if (!session || !session.user) return Err(makeErrorResponse(401, '認証されていません'));
  return Ok(session.user);
}
