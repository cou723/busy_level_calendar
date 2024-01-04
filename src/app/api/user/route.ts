import { NextApiRequest, NextApiResponse } from 'next';
import { UserWithoutDefaultSchema } from '@/types/user';
import { parseBody } from '@/libs/server/parseBody';
import { user } from '@/libs/server/service/user';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const newUser = parseBody({ req, res }, UserWithoutDefaultSchema);
  return await user.create(newUser);
}
