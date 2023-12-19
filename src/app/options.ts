import { isJwt } from "@/libs/server/parseJwt";
import { db } from "@/utils/server/db";
import { Account, JWT, Profile, Session, User, AuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { DefaultJWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

type JwtArgs = {
  token: DefaultJWT;
  user: User | null;
  account?: Account | null;
  profile?: Profile | null;
  isNewUser?: boolean | null;
};

type SessionArgs = { session: Session; token: JWT; user: AdapterUser } & {
  newSession: any;
  trigger: "update";
};

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
    signIn: "/auth/signin",
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
