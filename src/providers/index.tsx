"use client";

import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "./ThemeProvider";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
