import { NextApiRequest } from "next";
import { schedule } from "@/app/api/service/schedule";
import { getUserData } from "@/libs/server/getUserData";
import { ErrorResponse } from "@/types/server/ErrorResponse";
import { NextResponse } from "next/server";
import { Schedule } from "@/types/schedule";

export async function GET(req: NextApiRequest): Promise<NextResponse<Schedule[] | ErrorResponse>> {
  const user = await getUserData(req);
  if (user.err) return user.val;

  const getAllResult = await schedule.getAll(user.val.id);
  if (getAllResult.err) return getAllResult.val;

  return NextResponse.json(getAllResult.val);
}
