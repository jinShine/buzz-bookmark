import { AuthError } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";

import { sendSignUpCheck } from "./mailer";

export async function signInAction(provider: "google" | "github") {
  await signIn(provider, { redirectTo: "/" });
}

export const signUpAction = async (formData: FormData) => {
  const entries = Object.entries(formData);
  console.log("🚀 entries:", entries);

  const checkCode = uuidv4();
  await sendSignUpCheck("seungjin429@gmail.com", checkCode);
  console.log("🚀 Main has been sent");
};

export async function authenticate(prevState: string | undefined, formData: FormData) {
  const email = formData.get("email");
  const passwd = formData.get("passwd");
  if (!email || !passwd) return "Input the email & passwd, plz";

  try {
    await signIn("credentials", {
      email: email as string,
      passwd: passwd as string,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "EmailSignInError":
          return error.message;
        case "CredentialsSignin":
          return "Invalid Credentials!";
        default:
          return "Something went wrong!";
      }
    }
    throw error;
  }
}

export const signOutAction = async () => {
  await signOut();
};
