import React from "react";

import Link from "next/link";

export default function MyPage() {
  return (
    <div>
      <Link href="/api/auth/signout">로그아웃</Link>
    </div>
  );
}
