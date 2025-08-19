import { auth } from "@/lib/auth";
import { BookMarkedIcon, MoonStarIcon, SquareLibraryIcon, SunIcon } from "lucide-react";
import Link from "next/link";

import ThemeChanger from "../ThemeChanger";
import { Button } from "../ui/button";
import ProfileInfo from "./components/ProfileInfo";

export default async function GlobalNav() {
  const session = await auth();

  const didLogin = Boolean(session?.user);

  return (
    <header className="flex justify-between items-center h-[70px] px-4">
      <Link href="/">
        <div className="flex items-center gap-1">
          <BookMarkedIcon className="w-6.5 h-6.5" />
          <span className="text-2xl font-bold">Mark</span>
        </div>
      </Link>

      <div className="flex flex-1 justify-center items-center gap-4">
        <Link href="/" className="active-scale">
          홈
        </Link>

        {didLogin && (
          <Link href={`/bookcase/${session?.user?.name}`} title="내 서재">
            <SquareLibraryIcon />
          </Link>
        )}

        {/* <Link href="/api/auth/signin"> */}
        <Link href="/auth/sign-in">
          <Button variant="link">로그인</Button>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <ThemeChanger />
        <ProfileInfo session={session} />
      </div>
    </header>
  );
}
