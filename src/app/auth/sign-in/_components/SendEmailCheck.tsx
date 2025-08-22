import { Button } from "@/components/ui/button";
import { RewindIcon } from "lucide-react";
import { redirect } from "next/navigation";

type Props = {
  email: string;
  emailcheck: string;
};

export default async function SendEmailCheck({ email, emailcheck }: Props) {
  const sendMail = async () => {
    "use server";
    const res = await fetch("http://localhost:3000/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, oldEmailCheck: emailcheck }),
    });

    if (res.ok) {
      redirect(`/auth/error?error=${encodeURI("메일이 발송되었습니다.")}`);
    }
  };

  return (
    <form action={sendMail}>
      <Button type="submit">Resend email to {email}</Button>
    </form>
  );
}
