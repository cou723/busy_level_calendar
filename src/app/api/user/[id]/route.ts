import { user } from "@/app/api/service/user";
import { NextApiRequest, NextApiResponse } from "next";

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.id) {
    res.status(400).send("id is required");
    return;
  }
  return await user.delete(req.query.id as string);
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.id) {
    res.status(400).send("id is required");
    return;
  }
  return res.json(await user.get(req.query.id as string));
}
