"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { signOutAction } from "../../../actions/sign";

export default function MyPage() {
  const signOut = async () => {
    await signOutAction({ redirectTo: "/auth/sign-in" });
  };

  return (
    <div>
      <Button onClick={() => signOut()}>로그아웃</Button>
      <Link href="/api/auth/signout">로그아웃</Link>
    </div>
  );
}
