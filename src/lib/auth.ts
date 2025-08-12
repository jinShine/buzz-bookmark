import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from "./constants";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: AUTH_GOOGLE_ID,
      clientSecret: AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    // signIn: "/login",
  },
});
