"use client";

import { useEffect, useReducer, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import LabelInput from "@/components/ui/label-input";
import Link from "next/link";

import { signUpAction } from "../../../../../actions/sign";

export default function SignForm() {
  const [isLogin, toggleLogin] = useReducer(prev => !prev, true);

  return <>{isLogin ? <SignInForm onToggle={toggleLogin} /> : <SignUpForm />}</>;
}

function SignInForm({ onToggle }: { onToggle: () => void }) {
  return (
    <form>
      <div className="flex flex-col gap-2 w-full">
        <LabelInput label="이메일" type="email" id="email" />
        <LabelInput label="비밀번호" type="password" id="password" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          <Link href="#">
            <Button variant={"link"} type="button" className="w-full text-sm px-0">
              비밀번호 찾기
            </Button>
          </Link>
        </div>

        <Button variant={"primary"} type="submit" size={"lg"} className="w-full">
          로그인
        </Button>

        <Button variant={"outline"} type="submit" size={"lg"} className="w-full" onClick={onToggle}>
          회원가입
        </Button>
      </div>
    </form>
  );
}

function SignUpForm() {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (formData: FormData) => {
    await signUpAction(formData);
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col gap-2 w-full">
        <LabelInput ref={emailRef} label="이메일" type="email" id="email" />
        <LabelInput label="비밀번호" type="password" id="password" />
        <LabelInput label="비밀번호 확인" type="password" id="password-confirm" />
        <LabelInput label="닉네임" type="text" id="nickname" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          <Link href="#">
            <Button variant={"link"} type="button" className="w-full text-sm px-0">
              비밀번호 찾기
            </Button>
          </Link>
        </div>

        <Button variant={"primary"} type="submit" className="w-full">
          회원가입
        </Button>
      </div>
    </form>
  );
}
