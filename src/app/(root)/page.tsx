import { use } from "react";

import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return <div className="">Home</div>;
}
