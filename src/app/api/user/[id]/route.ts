import { user } from "@/app/api/service/user";
import { makeErrorResponse } from "@/types/server/ErrorResponse";
import { NextApiRequest } from "next";

export async function DELETE(req: NextApiRequest) {
  if (!req.query.id) return makeErrorResponse(400, "id is required");

  return await user.delete(req.query.id as string);
}

export async function GET(req: NextApiRequest) {
  if (!req.query.id) return makeErrorResponse(400, "id is required");

  return await user.get(req.query.id as string);
}
