import { JWT } from "next-auth";
import { z } from "zod";

export function isJwt(o: object): o is JWT {
  return z.object({ user: z.string(), email: z.string(), image: z.string() }).safeParse(o).success;
}
