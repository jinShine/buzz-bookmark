import { use } from "react";

import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ checkCode: string }>;
};

export default function SignUpCheckPage({ params }: Props) {
  const { checkCode } = use(params);

  console.log("🚀 checkCode:", checkCode);

  if (checkCode) {
    console.log("🚀 checkCode:", checkCode);
    redirect("/auth/sign-in");
  }

  return (
    <div>
      <h1>회원가입 인증</h1>
    </div>
  );
}
