import { NextApiRequest } from "next";
import { schedule } from "@/app/api/service/schedule";
import { getUserData } from "@/libs/server/getUserData";
import { ErrorResponse } from "@/types/server/ErrorResponse";
import { NextResponse } from "next/server";
import { Schedule } from "@/types/schedule";

export async function GET(req: NextApiRequest): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData(req);
  if (user.err) return user.val;

  console.log("called");

  const getResult = await schedule.getResult(user.val.id, req.query.id as string);
  if (getResult.err) return getResult.val;
  return NextResponse.json(getResult.val);
}

export async function PUT(req: NextApiRequest): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData(req);
  if (user.err) return user.val;

  return await schedule.update(user.val.id, req.query.id as string, req.body);
}

export async function DELETE(req: NextApiRequest): Promise<NextResponse<void | ErrorResponse>> {
  const user = await getUserData(req);
  if (user.err) return user.val;

  return await schedule.delete(user.val.id, req.query.id as string);
}
