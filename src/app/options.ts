import { Account, JWT, Profile, Session, User, AuthOptions } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { DefaultJWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

type JwtArgs = {
  token: DefaultJWT;
  user: User | null;
  account?: Account | null;
  profile?: Profile | null;
  isNewUser?: boolean | null;
};

type SessionArgs = { session: Session; token: JWT; user: AdapterUser } & {
  newSession: unknown;
  trigger: 'update';
};

if (!process.env.NEXTAUTH_SECRET) throw new Error('NEXTAUTH_SECRET is not defined');

if (!process.env.NEXT_PUBLIC_CLIENT_ID) throw new Error('NEXT_PUBLIC_CLIENT_ID is not defined');

if (!process.env.GOOGLE_SECRET) throw new Error('GOOGLE_SECRET is not defined');

export const options: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    /* CredentialsProvider({

    }) */
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    jwt: ({ token }: JwtArgs): JWT => {
      return token;
    },
    session: ({ session, token }: SessionArgs): Session => {
      return {
        ...session,
        user: {
          name: token.name!,
          id: token.email!,
          email: token.email!,
        },
      };
    },
  },
};
