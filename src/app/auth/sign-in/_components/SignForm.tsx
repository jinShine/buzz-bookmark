"use client";

import { useActionState, useEffect, useReducer, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import LabelInput from "@/components/ui/label-input";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

import { authenticate, signUpAction } from "../../../../../actions/sign";

export default function SignForm() {
  const [isLogin, toggleLogin] = useReducer(prev => !prev, true);

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return <>{isLogin ? <SignInForm onToggle={toggleLogin} email={email} /> : <SignUpForm />}</>;
}

function SignInForm({ onToggle, email }: { onToggle: () => void; email: string | null }) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwdRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLButtonElement>(null);

  const [validError, signinAction, isPending] = useActionState(authenticate, undefined);

  const handleRemember = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);

    if (!e.target.checked) {
      localStorage.removeItem("savedEmail");
    }
  };

  useEffect(() => {
    if (email) {
      emailRef.current?.focus();
    } else {
      const savedEmail = localStorage.getItem("savedEmail");
      if (savedEmail && emailRef.current) {
        emailRef.current.value = savedEmail;
        passwdRef.current?.focus();
      } else {
        emailRef.current?.focus();
      }
    }
  }, [email]);

  return (
    <form
      action={formData => {
        console.log("@@@@@@@@ form", rememberRef.current?.value);
        if (rememberRef.current?.value === "on") {
          localStorage.setItem("savedEmail", formData.get("email") as string);
        }

        // if (rememberRef.current?.checked) {
        //   localStorage.setItem("savedEmail", formData.get("email") as string);
        // }

        // return signinAction(formData);
      }}
    >
      <div className="flex flex-col gap-2 w-full">
        <LabelInput ref={emailRef} label="이메일" type="email" name="email" id="email" error={validError} />
        <LabelInput ref={passwdRef} label="비밀번호" type="password" name="passwd" id="passwd" error={validError} />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input ref={rememberRef} type="checkbox" id="remember" onChange={handleRemember} />
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

// export type ActionResult<T = any> =
//   | { success: true; data: T }
//   | { success: false; error: Record<string, { errors: string[] }> };
export type ValidError = Record<string, { errors: string[] }>;

const mock = {
  email: "seungjin429@gmail.com",
  password: "123456",
  passwordConfirm: "123456",
  nickname: "buzz",
};

function SignUpForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  // const [validError, signupAction, isPending] = useActionState(
  //   async (_prevValidError: ValidError | undefined, formData: FormData) => {
  //     const response = await signUpAction(formData);

  //     if (!response.success && response.error) {
  //       return response.error;
  //     }

  //     redirect(`/auth/error?error=CheckEmail&email=${response.data?.email}&emailcheck=${response.data?.emailcheck}`);
  //   },
  //   undefined,
  // );

  const [validError, setValidError] = useState<ValidError>();

  const handleSubmit = async (formData: FormData) => {
    const response = await signUpAction(formData);

    if (!response.success && response.error) {
      setValidError(response.error);
      return;
    }

    redirect(`/auth/error?error=CheckEmail&email=${response.data?.email}&emailcheck=${response.data?.emailcheck}`);
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <form action={handleSubmit} className="flex flex-col gap-2 w-full">
      {/* <div className="flex flex-col gap-2 w-full"> */}
      <LabelInput
        ref={emailRef}
        label="이메일"
        type="email"
        id="email"
        name="email"
        defaultValue={mock.email}
        error={validError}
      />
      <LabelInput
        label="비밀번호"
        type="password"
        id="passwd"
        name="passwd"
        defaultValue={mock.password}
        error={validError}
      />
      <LabelInput
        label="비밀번호 확인"
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        defaultValue={mock.passwordConfirm}
        error={validError}
      />
      <LabelInput
        label="닉네임"
        type="text"
        id="nickname"
        name="nickname"
        defaultValue={mock.nickname}
        error={validError}
      />

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
      {/* </div> */}
    </form>
  );
}
