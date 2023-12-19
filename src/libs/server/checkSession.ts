import { generateErrorResponse } from "@/libs/server/generateErrorResponse";
import { ErrorResponse } from "@/types/server/ErrorResponse";
import { SessionUser } from "@/utils/server/next-auth";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Err, Ok, Result } from "ts-results";

// this function is not return value. it call res.send().
export async function checkSession(req: NextApiRequest): Promise<Result<SessionUser, NextResponse<ErrorResponse>>> {
  const session = await getServerSession(req);

  if (!session || !session.user) return Err(generateErrorResponse("認証されていません", 401));
  return Ok(session.user);
}
