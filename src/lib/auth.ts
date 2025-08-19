import prisma from "@/lib/db";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import { v4 as uuidv4 } from "uuid";

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
        console.log("🚀 credentials:", credentials);
        if (!credentials || !credentials.email || !credentials.passwd) return null;

        const user = {
          id: "1",
          email: credentials.email,
          name: "User",
          password: credentials.passwd,
        } as unknown as any;
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  pages: {
    // signIn: "/login",
  },
  trustHost: true,
  jwt: { maxAge: 60 * 30 }, // 30분
  callbacks: {
    // DB를 읽어서 존재하면 로그인
    // 존재하지 않으면 가입로직(이메일 발송)
    async signIn({ user, account, profile }) {
      console.log("🚀 signIn - user:", user, account?.provider, profile);
      if (!user.email) return false;

      const { email } = user;
      let member = await prisma.member.findUnique({ where: { email }, select: { id: true, nickname: true } });

      if (!member) {
        const newMember = await prisma.member.create({
          select: { id: true, nickname: true },
          data: {
            nickname: user.name || "guest",
            email,
            image: user.image ?? null,
            emailcheck: uuidv4(),
          },
        });

        member = newMember;
      }

      // sendEmail

      // const userData = await findUserByEmail(email);
      // if (account?.provider === "credentials") {
      //   const isValidPassword = userData?.passwd && user.password && (await compare(userData.passwd, user.password));

      //   if (!userData || !isValidPassword) return false;
      //   user.id = String(userData.id);
      //   user.name = userData.nickname;
      //   user.image = userData.image ?? undefined;
      // } else {
      //   if (!userData) {
      //     delete user.id;
      //     const newer = await createUser({
      //       email: user.email,
      //       nickname: user.name ?? user.email.split("@")[0],
      //       image: user.image ?? null,
      //       isadmin: false,
      //     });
      //     console.log("🚀 newer:", newer);
      //     user.id = String(newer.id);
      //     user.isadmin = newer.isadmin;
      //   } else {
      //     user.id = String(userData?.id);
      //     user.name = user.name ?? userData?.nickname;
      //     user.image = user.image ?? userData?.image ?? undefined;
      //   }
      // }

      // user.isadmin = userData?.isadmin ?? user.isadmin;
      return true;
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

type CreateUserInput = {
  email: string;
  nickname: string;
  image: string | null;
  isadmin: boolean;
};

async function findUserByEmail(email: string) {
  if (!email) return null;
  return prisma.member.findUnique({ where: { email } });
}

async function createUser(input: CreateUserInput) {
  return prisma.member.create({
    data: {
      email: input.email,
      nickname: input.nickname,
      image: input.image,
      isadmin: input.isadmin,
    },
  });
}
