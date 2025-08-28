import { use } from "react";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function BookcasePage() {
  const session = use(auth());

  if (!session?.user) {
    redirect("/auth/sign-in");
  }

  redirect(`/bookcase/${encodeURI(session.user.name || "")}`);
}
