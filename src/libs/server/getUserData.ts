import { makeErrorResponse } from "@/types/server/ErrorResponse";
import { checkSession } from "@/utils/server/checkSession";
import { NextApiRequest } from "next";
import { User } from "next-auth";
import { NextResponse } from "next/server";
import { Result, Err, Ok } from "ts-results";

export async function getUserData(req: NextApiRequest): Promise<Result<User, NextResponse>> {
  const user = await checkSession(req);
  if (!user) return Err(makeErrorResponse(500, "getServerSessionでuserが取得できませんでした"));
  return Ok(user);
}
