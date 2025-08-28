"use server";

import { ValidError } from "@/app/auth/sign-in/_components/SignForm";
import { auth, signIn, signOut } from "@/lib/auth";
import { INTERNAL_SECRET, PUBLIC_URL } from "@/lib/constants";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import z from "zod";

export async function signInAction(provider: "google" | "github") {
  await signIn(provider, { redirectTo: "/" });
}

export const signUpAction = async (formData: FormData) => {
  const entries = Object.fromEntries(formData);

  const validatedFormData = z
    .object({
      email: z.email(),
      passwd: z.string().min(6),
      passwordConfirm: z.string().min(6),
      nickname: z.string().min(1),
    })
    .refine(data => data.passwd === data.passwordConfirm, {
      path: ["passwordConfirm"],
      error: "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
    })
    .safeParse(entries);

  if (!validatedFormData.success) {
    return { error: z.treeifyError(validatedFormData.error).properties };
  }

  const email = formData.get("email");
  const encPasswd = await bcrypt.hash(validatedFormData.data.passwd, 10);
  const checkCode = uuidv4();

  const { passwordConfirm, ...restData } = { ...validatedFormData.data, passwd: encPasswd, emailcheck: checkCode };

  await prisma.member.create({
    data: restData,
  });

  await fetch(`${PUBLIC_URL}/api/sendmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${INTERNAL_SECRET}`,
    },
    body: JSON.stringify({
      email,
      emailcheck: checkCode,
    }),
  });

  // await sendSignUpCheck("seungjin429@gmail.com", checkCode);
  console.log("🚀 Main has been sent");

  return {
    success: true,
    data: { ...validatedFormData.data, emailcheck: checkCode },
  };
};

export async function authenticate(prevState: ValidError | undefined, formData: FormData) {
  const entries = Object.fromEntries(formData);

  const validatedFormData = z
    .object({
      email: z.email(),
      passwd: z.string().min(6),
    })
    .safeParse(entries);

  if (!validatedFormData.success) {
    return z.treeifyError(validatedFormData.error).properties as ValidError;
  }

  try {
    await signIn("credentials", {
      email: validatedFormData.data.email,
      passwd: validatedFormData.data.passwd,
    });
  } catch (error) {
    console.log("🚀 sign.ts - authenticate - error:", error);
    if (error instanceof AuthError) {
      let typeErr;
      switch (error.type) {
        case "AccessDenied":
          typeErr = "Invalid Password!";
          break;
        case "OAuthAccountNotLinked":
          typeErr = `You registed SNS Account(${formData.get("email")})`;
          break;
        case "EmailSignInError": // email magic link
          typeErr = error.message;
          break;
        case "CredentialsSignin":
          typeErr = "Invalid Credentials!";
          break;
        default:
          typeErr = error.message || "Something went wrong!";
      }
      return { email: { errors: [typeErr] } } as ValidError;
    }
  }
}

export const signOutAction = async ({ redirectTo }: { redirectTo?: string } = {}) => {
  await signOut({ redirectTo });
};

export const findMemberByEmail = async (email: string) => {
  return await prisma.member.findUnique({ where: { email } });
};
