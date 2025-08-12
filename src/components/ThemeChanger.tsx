"use client";

import { useEffect, useState } from "react";

import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

const THEME = ["light", "dark", "system"] as const;
const THEME_ICON = {
  light: <MonitorIcon />,
  dark: <SunIcon />,
  system: <MoonStarIcon />,
};

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const changeTheme = () => {
    let nextThemeIdx = THEME.indexOf(theme as keyof typeof THEME_ICON) + 1;
    if (nextThemeIdx === THEME.length) {
      nextThemeIdx = 0;
    }

    setTheme(THEME[nextThemeIdx]);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <MoonStarIcon />;

  return (
    <>
      <Button variant={"secondary"} onClick={changeTheme} className="btn-icon">
        {THEME_ICON[theme as keyof typeof THEME_ICON]}
      </Button>
    </>
  );
}
