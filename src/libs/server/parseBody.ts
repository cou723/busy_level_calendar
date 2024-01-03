import { NextApi } from '@/types/nextApi';
import { parseBySchema } from '@/utils/parseBySchema';
import { z } from 'zod';

export function parseBody<T>({ req, res }: NextApi, schema: z.ZodSchema<T>): T {
  const parsed = parseBySchema({ schema, target: req.body });

  if (parsed.err) res.status(400).send(parsed.val);
  // errの場合は直前のifで分岐しているので、ここでは必ずvalが返ってくるため、asを使って型を指定している
  return parsed.val as T;
}
