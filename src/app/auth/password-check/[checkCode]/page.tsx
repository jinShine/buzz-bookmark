"use client";

import { use } from "react";

import { Button } from "@/components/ui/button";
import LabelInput from "@/components/ui/label-input";
import { redirect } from "next/navigation";
import z from "zod";

type Props = {
  params: Promise<{ checkCode: string }>;
};

export default function PasswordCheckPage({ params }: Props) {
  const { checkCode } = use(params);

  const changePassword = async (formData: FormData) => {
    const data = Object.fromEntries(formData);

    const validator = z
      .object({
        password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다."),
        passwordConfirm: z.string().min(8),
      })
      .refine(data => data.password === data.passwordConfirm, {
        message: "비밀번호가 일치하지 않습니다.",
        path: ["passwordConfirm"],
      })
      .safeParse(data);

    if (validator.success) {
      console.log("object", validator.data);
    } else {
      const msg = JSON.parse(validator.error.message);
      console.log("** >>", msg[0].message);
      return alert(msg[0].message);
    }

    // TODO: update member set password & go to sign-in page
  };

  return (
    <div className="flex flex-col items-center justify-center py-30 gap-4 ">
      <h1 className="text-2xl font-bold">비밀번호 변경</h1>

      <form action={changePassword} className="flex flex-col gap-4 w-full max-w-md">
        <LabelInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요." />
        <LabelInput
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />

        <Button variant={"destructive"} type="submit">
          비밀번호 변경
        </Button>
      </form>
    </div>
  );
}
