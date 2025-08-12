import { use } from "react";

import { auth } from "@/lib/auth";

type Props = {
  params: Promise<{ member: string }>;
};

export default function BookcasePage({ params }: Props) {
  const { member } = use(params);
  const session = use(auth());

  return (
    <div>
      <h1 className="text-xl font-semibold">LibraryPage {decodeURI(member)}'s Bookmark</h1>
    </div>
  );
}
