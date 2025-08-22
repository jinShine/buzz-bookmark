import { auth } from "@/lib/auth";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await auth();
  const didLogin = Boolean(session?.user);

  if (!didLogin) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url));
  }

  return NextResponse.next();
}

// 로그인이 필요하지 않는 애들만 체크
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|images|api/auth|login|regist|auth/password-check|auth/sign-in|auth/sign-up|auth/error|$).*)",
  ],
};
