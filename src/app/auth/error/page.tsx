import { use } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import SendEmailCheck from "../sign-in/_components/SendEmailCheck";

type Props = {
  searchParams: Promise<{ error: string; email: string; emailcheck: string }>;
};

export default function AuthErrorPage({ searchParams }: Props) {
  const { error, email, emailcheck } = use(searchParams);

  return (
    <div className="grid place-items-center h-full">
      <div className="border p-5 text-center rounded-md">
        <h1 className="text-xl mb-5">{getErrorMessage(error)}</h1>
        <div className="flex justify-center items-center gap-2">
          <Button variant={"outline"} asChild={true}>
            <Link href="/auth/sign-in">Goto Login</Link>
          </Button>
          {email && emailcheck && error === "CheckEmail" && <SendEmailCheck email={email} emailcheck={emailcheck} />}
        </div>
      </div>
    </div>
  );
}

const getErrorMessage = (error: string) => {
  if (error === "CheckEmail") {
    return "가입 승인 메일을 확인해주세요.";
  } else if (error === "NtoMatchPassword") {
    return "이메일 또는 비밀번호가 일치하지 않습니다.";
  } else if (error === "NotFound") {
    return "존재하지 않는 이메일입니다. 이메일을 확인해주세요.";
  } else if (error === "WithdrawMember") {
    return "탈퇴한 회원입니다. 관리자에게 문의해주세요.";
  } else if (error === "InvalidToken") {
    return "이메일 인증 토큰이 만료되었습니다. 다시 인증해주세요.";
  } else {
    return "알 수 없는 오류가 발생했습니다.";
  }
};
