import { NextApiRequest } from "next";
import { schedule } from "@/app/api/service/schedule";
import { getUserData } from "@/libs/server/getUserData";
import { ErrorResponse } from "@/types/server/ErrorResponse";
import { NextResponse } from "next/server";
import { Calendar } from "@/types/calendar";

export async function GET(req: NextApiRequest): Promise<NextResponse<Calendar | ErrorResponse>> {
  const user = await getUserData(req);
  console.log("user", user);

  if (user.err) return user.val;

  const getSchedulesResult = await schedule.getAll(user.val.id);

  if (getSchedulesResult.err) return getSchedulesResult.val;
  console.log({
    id: user.val.email,
    schedules: getSchedulesResult.val,
  });

  return NextResponse.json({
    id: user.val.email!,
    schedules: getSchedulesResult.val,
  });
}
