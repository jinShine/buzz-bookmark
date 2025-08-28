import { INTERNAL_SECRET } from "@/lib/constants";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import { sendSignUpCheck } from "../../../../actions/mailer";

export async function POST(req: NextRequest) {
  const { email, emailcheck, oldEmailCheck } = await req.json();

  console.log("🚀 ~ POST ~ email:", email);
  console.log("🚀 ~ POST ~ emailcheck:", emailcheck);
  console.log("🚀 ~ POST ~ oldEmailCheck:", oldEmailCheck);

  // resend...
  if (oldEmailCheck) {
    const mbr = await prisma.member.findUnique({ where: { email } });
    if (mbr?.emailcheck !== oldEmailCheck) {
      redirect("/login/error?error=InvalidToken"); // abusing
    }

    const newToken = uuidv4();
    await prisma.member.update({
      data: { emailcheck: newToken },
      where: { email },
    });
    await sendSignUpCheck(email, newToken);
  } else {
    const authorization = req.headers.get("authorization");
    if (authorization !== `Bearer ${INTERNAL_SECRET}`) throw new Error("InvalidToken");
    await sendSignUpCheck(email, emailcheck);
  }

  return NextResponse.json({ email, message: "Email Resent." });
}
