import { UserWithoutDefault } from "@/types/user";
import { User } from "@prisma/client";
import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: Omit<UserWithoutDefault, "hash"> & Pick<User, "id">;
  }
  interface JWT extends DefaultJWT {
    accessToken?: string;
    user?: Omit<UserWithoutDefault, "hash"> & Pick<User, "id">;
  }
}
