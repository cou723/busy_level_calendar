import { z } from 'zod';

import type { JWT } from 'next-auth';

export function isJwt(o: object): o is JWT {
  return z.object({ name: z.string(), email: z.string().optional(), accessToken: z.string() }).safeParse(o).success;
}
