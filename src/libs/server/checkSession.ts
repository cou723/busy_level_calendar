import { options } from '@/app/options';
import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { SessionUser } from '@/utils/server/next-auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { Err, Ok, Result } from 'ts-results';

// this function is not return value. it call res.send().
export async function checkSession(): Promise<Result<SessionUser, NextResponse<ErrorResponse>>> {
  const session = await getServerSession(options);

  if (!session || !session.user) return Err(makeErrorResponse(401, '認証されていません'));
  return Ok(session.user);
}
