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
    <div className="flex flex-col items-center justify-center h-[500px] gap-3">
      <h1 className="text-2xl font-bold">{getErrorMessage(error)}</h1>

      <Link href={"/auth/sign-in"}>
        <Button variant="secondary">로그인 페이지로 이동</Button>
      </Link>

      <SendEmailCheck email={email} emailcheck={emailcheck} />
    </div>
  );
}

const getErrorMessage = (error: string) => {
  if (error === "CheckEmail") {
    return "이미 가입된 이메일입니다. 이메일을 확인해주세요.";
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
