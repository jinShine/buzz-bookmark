"use server";

import { MAILER_PASS, MAILER_USER, PUBLIC_URL } from "@/lib/constants";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: MAILER_USER,
    pass: MAILER_PASS,
  },
});

const FROM = `"BookMark" <${MAILER_USER}>`;

export const sendSignUpCheck = async (to: string, checkCode: string, subject?: string, html?: string) => {
  const _subject = subject || "BookMark 회원가입 인증 메일";
  const _html =
    html ||
    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
      <h1 style="font-size: 24px; font-weight: bold;">BookMark 회원가입 인증 메일</h1>
      <a href="${PUBLIC_URL}/auth/sign-in?checkCode=${checkCode}">가입 인증</a>
    </div>`;

  await sendMail(to, _subject, _html);
};

export const sendPasswordReset = async (to: string, checkCode: string, subject?: string, html?: string) => {
  const _subject = subject || "BookMark 회원가입 인증 메일";
  const _html =
    html ||
    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
      <h1 style="font-size: 24px; font-weight: bold;">BookMark 패스워드 찾기</h1>
      
      <a href="${PUBLIC_URL}/auth/sign-in?checkCode=${checkCode}">암호 변경</a>
    </div>`;

  await sendMail(to, _subject, _html);
};

const sendMail = async (
  to: string,
  subject: string,
  html: string,
  attchments?: { filename: string; path: string }[],
) => {
  transporter.sendMail({
    from: FROM,
    to,
    subject,
    html,
    cc: FROM, // 메일이 잘 갔는지 확인 하는 용도!
    attachments: attchments,
  });
};
