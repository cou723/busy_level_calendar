import type { UserWithoutDefault } from '@/types/user';
import type { User } from '@prisma/client';
import type { DefaultSession } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';


export type SessionUser = Omit<UserWithoutDefault, 'hash'> & Pick<User, 'id'> & { accessToken?: string };

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: SessionUser;
    accessToken: string;
  }
  interface JWT extends DefaultJWT {
    name: string;
    email?: string | null;
    accessToken: string;
  }
}
