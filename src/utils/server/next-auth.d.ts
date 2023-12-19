import { UserWithoutDefault } from "@/types/user";
import { User } from "@prisma/client";
import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export type SessionUser = Omit<UserWithoutDefault, "hash"> & Pick<User, "id">;

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: SessionUser;
  }
  interface JWT extends DefaultJWT {
    name?: string | null;
    email?: string | null;
  }
}
