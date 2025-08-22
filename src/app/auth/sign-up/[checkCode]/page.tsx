import { use } from "react";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

import { findMemberByEmail } from "../../../../../actions/sign";

type Props = {
  params: Promise<{ checkCode: string }>;
  searchParams: Promise<{ email: string }>;
};

export default async function SignUpCheckPage({ params, searchParams }: Props) {
  const { checkCode } = await params;
  const { email } = await searchParams;

  console.log("🚀 checkCode:", checkCode);

  const member = await findMemberByEmail(email);

  if (checkCode !== member?.emailcheck) {
    console.log("🚀 checkCode:", checkCode);
    redirect("/auth/error?error=InvalidToken");
  }

  // 일치한다면 emailcheck 초기화, 로그인으로 보내기
  await prisma.member.update({
    where: { email },
    data: { emailcheck: null },
  });

  redirect("/auth/sign-in");

  return <div>회원가입</div>;
}
