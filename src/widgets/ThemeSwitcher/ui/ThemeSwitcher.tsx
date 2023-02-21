import cn from "shared/lib/classNames/classNames";
import "./ThemeSwitcher.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button/Button";
import Logo from "shared/assets/icons/theme-icon.svg";
import React from "react";
import { Theme, TTheme } from "app/providers/ThemeProvider/lib/ThemeContext";

// up
export const LogoColor: Record<TTheme, string> = {
  [Theme.LIGHT]: "blue",
  [Theme.DARK]: "white",
} as const;

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={cn("theme-switcher", {}, [className])} onClick={toggleTheme}>
      <Logo fill={LogoColor[theme]} />
    </Button>
  );
};