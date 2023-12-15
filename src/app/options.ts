import { Account, Profile, Session, User, JWT, AuthOptions } from "next-auth";
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
  providers: [
    GoogleProvider({
      clientId: import.meta.env.VITE_CLIENT_ID,
      clientSecret: import.meta.env.VITE_SECRET,
    }),
  ],
  callbacks: {
    jwt: ({ token, user, account }: JwtArgs): JWT => {
      token.user = user;
      const customToken: JWT = {
        ...token,
        accessToken: account?.access_token,
      };

      return customToken;
    },
    session: ({ session, token }: SessionArgs): Session => {
      return {
        ...session,
        user: token.user,
      };
    },
  },
};
