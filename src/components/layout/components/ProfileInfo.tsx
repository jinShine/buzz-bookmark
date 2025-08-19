"use client";

import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

import { signOutAction } from "../../../../actions/sign";

type Props = {
  session: Session | null;
};

export default function ProfileInfo({ session }: Props) {
  const didLogin = Boolean(session?.user);

  return didLogin ? (
    <Button variant="ghost" className="p-2 py-6 font-semibold" onClick={() => signOutAction()}>
      <Image src={session?.user?.image ?? ""} alt="user" width={32} height={32} className="rounded-full" />
      <span>{session?.user?.name}</span>
    </Button>
  ) : (
    <Link href="/auth/sign-in">
      <Button variant="secondary" className="p-2 py-6 font-semibold">
        로그인
      </Button>
    </Link>
  );
}
