"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

type Provider = "github" | "google" | "kakao" | "naver";

type Props = {
  provider: Provider;
  label?: string;
  redirectTo?: string;
  className?: string;
  disabled?: boolean;
};

const PROVIDER_CONFIG: Record<
  Provider,
  { label: string; className: string; icon: React.ReactNode; ariaLabel: string }
> = {
  github: {
    label: "Github으로 계속하기",
    className: "w-full gap-2 rounded-md bg-[#181717] text-white hover:bg-black h-12",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.934 0-1.31.465-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.51 11.51 0 013.003-.403c1.018.005 2.045.137 3.003.403 2.29-1.554 3.296-1.23 3.296-1.23.655 1.653.244 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.102.815 2.222 0 1.605-.015 2.897-.015 3.292 0 .322.217.698.825.58C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    ariaLabel: "Github으로 계속하기",
  },
  google: {
    label: "Google로 계속하기",
    className: "w-full gap-2 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 h-12",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.68 1.22 9.17 3.6l6.83-6.83C36.23 2.53 30.54 0 24 0 14.63 0 6.4 5.48 2.56 13.44l7.91 6.14C12.11 13.12 17.57 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.1 24.5c0-1.54-.14-3.02-.41-4.44H24v8.4h12.46c-.54 2.9-2.16 5.36-4.6 7.01l7.09 5.52C43.61 37.67 46.1 31.54 46.1 24.5z"
        />
        <path
          fill="#FBBC05"
          d="M10.47 28.38A14.48 14.48 0 0 1 9.5 24c0-1.52.26-2.98.72-4.38l-7.91-6.14A23.85 23.85 0 0 0 0 24c0 3.88.93 7.55 2.56 10.85l7.91-6.47z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.9-2.13 15.87-5.78l-7.09-5.52c-2.05 1.37-4.7 2.18-8.78 2.18-6.43 0-11.89-3.62-14.53-8.88l-7.91 6.47C6.4 42.52 14.63 48 24 48z"
        />
      </svg>
    ),
    ariaLabel: "Google로 계속하기",
  },
  kakao: {
    label: "카카오로 계속하기",
    className: "w-full gap-2 bg-[#FEE500] hover:bg-[#ecd800] text-[#000000] h-12 rounded-md",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3C6.48 3 2 6.97 2 11.5c0 2.97 2.07 5.58 5.18 7.03-.23.84-.83 3.02-.95 3.53-.15.66.24.65.5.47.21-.14 3.34-2.28 4.7-3.2.84.12 1.71.18 2.57.18 5.52 0 10-3.97 10-8.5S17.52 3 12 3z" />
      </svg>
    ),
    ariaLabel: "카카오로 계속하기",
  },
  naver: {
    label: "네이버로 계속하기",
    className: "w-full gap-2 bg-[#03C75A] hover:bg-[#02b155] text-white h-12 rounded-md",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M4 4h5.37l5.26 8.28V4H20v16h-5.37l-5.26-8.28V20H4z" />
      </svg>
    ),
    ariaLabel: "네이버로 계속하기",
  },
};

export default function SNSLoginButton({ provider, label, redirectTo = "/bookcase", className, disabled }: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const cfg = PROVIDER_CONFIG[provider];

  const handleClick = async () => {
    if (disabled || isLoading) return;
    setIsLoading(true);
    try {
      ("use server");
      await signIn(provider, { redirectTo });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <form action={handleClick}>
    <Button
      type="button"
      // formAction={handleClick}
      aria-label={cfg.ariaLabel}
      disabled={disabled || isLoading}
      className={cn(cfg.className, className)}
      onClick={handleClick}
    >
      {cfg.icon}
      <span className="text-sm font-medium">{label ?? cfg.label}</span>
    </Button>
    // </form>
  );
}
