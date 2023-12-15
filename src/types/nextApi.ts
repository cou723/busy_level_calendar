import { NextApiRequest, NextApiResponse } from "next";

export type NextApi = {
  req: NextApiRequest;
  res: NextApiResponse;
};
