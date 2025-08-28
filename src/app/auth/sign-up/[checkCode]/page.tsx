import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Link from "next/link";
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

  return (
    <div className="grid place-items-center h-full">
      <div className="border p-5 text-center rounded-md">
        <h1 className="text-xl mb-5">가입 승인 완료</h1>
        <div className="flex justify-center items-center gap-2">
          <Button variant={"outline"} asChild={true}>
            <Link href="/auth/sign-in">Goto Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
