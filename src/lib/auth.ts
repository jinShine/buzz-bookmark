import prisma from "@/lib/db";
import { compare } from "bcryptjs";
import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import { v4 as uuidv4 } from "uuid";
import z from "zod";

import { findMemberByEmail } from "../../actions/sign";
import {
  AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET,
  AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET,
  AUTH_KAKAO_ID,
  AUTH_KAKAO_SECRET,
  AUTH_NAVER_ID,
  AUTH_NAVER_SECRET,
} from "./constants";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: AUTH_GOOGLE_ID,
      clientSecret: AUTH_GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: AUTH_GITHUB_ID,
      clientSecret: AUTH_GITHUB_SECRET,
    }),
    NaverProvider({
      clientId: AUTH_NAVER_ID,
      clientSecret: AUTH_NAVER_SECRET,
    }),
    KakaoProvider({
      clientId: AUTH_KAKAO_ID,
      clientSecret: AUTH_KAKAO_SECRET,
    }),
    Credentials({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        passwd: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("🚀 auth.ts - credentials:", credentials);
        if (!credentials || !credentials.email || !credentials.passwd) return null;

        const user = {
          email: credentials.email as string,
          password: credentials.passwd,
        };

        const validator = z
          .object({
            email: z.email(),
            password: z.string().min(6),
          })
          .safeParse(user);
        if (!validator.success) return null;

        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  trustHost: true,
  jwt: { maxAge: 60 * 30 }, // 30분
  callbacks: {
    // SNS(signin + signup 같이 진행), credentials(signin만 진행)
    // DB를 읽어서 존재하면 로그인
    // 존재하지 않으면 가입로직(이메일 발송)
    async signIn({ user, account }) {
      const { name, email, image, password } = user;
      if (!email) return false;

      const isCredential = account?.provider === "credentials";
      const mbr = await findMemberByEmail(email);

      if (mbr) {
        if (mbr.emailcheck) return `/auth/error?error=CheckEmail&email=${email}&emailcheck=${mbr.emailcheck}`;
        if (mbr.outdt) return "/auth/error?error=WithdrawMember";

        // password check
        if (isCredential) {
          console.log("🚀 ~ mbr.passwd:", mbr.passwd, password, !mbr.passwd);
          if (!mbr.passwd) {
            const err = new AuthError(`You registed SNS Account(${email})`);
            err.type = "OAuthAccountNotLinked";
            throw err;
          }
          // return '/login/error?error=NeedToSnsLogin&email=' + email;

          return compare(password || "", mbr.passwd);
        }

        return true;
      }

      // password check
      if (isCredential) {
        return "/auth/error?error=NotFound";
      }

      // regist by SNS
      const newMbr = await prisma.member.create({
        select: { id: true, nickname: true },
        data: {
          nickname: name || "guest",
          email,
          image,
        },
      });
      console.log("🚀 ~ newMbr:", newMbr);

      // sendRegistMail

      return false;
    },
    async jwt({ token, user, trigger, session }) {
      // console.log('🚀 trigger:', trigger, session);
      // console.log('🚀 jwt - token:', token, user);
      const userData = trigger === "update" ? session : user;
      if (userData) {
        token.id = userData.id;
        token.email = userData.email;
        token.name = userData.name;
        token.picture = userData.image;
        token.isadmin = userData.isadmin;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log('🚀 cb - session:', session, token);
      if (token) {
        session.user.id = String(token.id);
        session.user.email = token.email as string;
        session.user.name = token.name;
        session.user.image = token.picture;
        session.user.isadmin = token.isadmin;
      }
      return session;
    },
  },
});
