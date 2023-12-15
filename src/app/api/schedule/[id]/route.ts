import { NextApiRequest } from "next";
import { schedule } from "@/app/api/service/schedule";
import { getUserData } from "@/libs/server/getUserData";

export async function GET(req: NextApiRequest) {
  const user = await getUserData(req);
  if (user.err) return user.val;

  return await schedule.get(user.val.id, req.query.id as string);
}

export async function PUT(req: NextApiRequest) {
  const user = await getUserData(req);
  if (user.err) return user.val;

  return await schedule.update(user.val.id, req.query.id as string, req.body);
}

export async function DELETE(req: NextApiRequest) {
  const user = await getUserData(req);
  if (user.err) return user.val;

  return await schedule.delete(user.val.id, req.query.id as string);
}
