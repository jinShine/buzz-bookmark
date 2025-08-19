import SNSLoginButton from "@/components/login/SNSLoginButton";

import SignForm from "./_components/SignForm";

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col mx-auto h-full max-w-[600px] p-10 gap-5">
        <h1 className="text-2xl font-bold text-center">로그인</h1>

        <div className="w-full">
          <SignForm />
        </div>

        <div className="flex items-center gap-2 my-5">
          <div className="w-full h-[1px] bg-gray-200 " />
          <div className="text-gray-600 text-xs shrink-0 w-fit">간편 로그인</div>
          <div className="w-full h-[1px] bg-gray-200 " />
        </div>

        <div className="flex flex-col gap-2">
          <SNSLoginButton provider="google" />
          <SNSLoginButton provider="github" />
          <SNSLoginButton provider="kakao" />
          <SNSLoginButton provider="naver" />
        </div>
      </div>
    </>
  );
}
