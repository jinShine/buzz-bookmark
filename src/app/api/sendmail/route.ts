import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import { sendSignUpCheck } from "../../../../actions/mailer";

export async function POST(req: NextRequest) {
  const { email, emailcheck, oldEmailCheck } = await req.json();

  if (oldEmailCheck) {
    const member = await prisma.member.findUnique({
      where: { email },
    });

    if (member?.emailcheck !== oldEmailCheck) {
      redirect("auth/error?error=InvalidToken");
    }

    const newToken = uuidv4();
    await prisma.member.update({
      where: { email },
      data: { emailcheck: newToken },
    });

    await sendSignUpCheck(email, newToken);
  } else {
    const token = req.headers.get("Authorization")?.split(" ")[1];

    if (token !== process.env.INTERNAL_SECRET) {
      redirect("auth/error?error=InvalidToken");
    }

    await sendSignUpCheck(email, token || "");
  }

  return NextResponse.json({ email });
}
