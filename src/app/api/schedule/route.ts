import { NextApiRequest } from "next";
import { schedule } from "@/app/api/service/schedule";
import { getUserData } from "@/libs/server/getUserData";

export async function GET(req: NextApiRequest) {
  const user = await getUserData(req);
  if (user.err) return user.val;
  return await schedule.get(user.val.id);
}
