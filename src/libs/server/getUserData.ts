import { checkSession } from "@/libs/server/checkSession";
import { ErrorResponse, makeErrorResponse } from "@/types/server/ErrorResponse";
import { NextApiRequest } from "next";
import { User } from "next-auth";
import { NextResponse } from "next/server";
import { Result, Err } from "ts-results";

export async function getUserData(req: NextApiRequest): Promise<Result<User, NextResponse<ErrorResponse>>> {
  const user = await checkSession(req);
  if (user.err) {
    if (user.val.status === 401) return Err(user.val);
    return Err(makeErrorResponse(500, "getServerSessionでuserが取得できませんでした"));
  }
  return user;
}
