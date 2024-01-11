import type { NextApiRequest, NextApiResponse } from 'next';

import { parseBody } from '@/libs/server/parseBody';
import { user } from '@/libs/server/service/user';
import { UserWithoutDefaultSchema } from '@/types/user';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const newUser = parseBody({ req, res }, UserWithoutDefaultSchema);
  return await user.create(newUser);
}
