import { classNames as cn } from "shared/lib/classNames"
import "./ThemeSwitcher.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { Button } from "shared/ui"
import Logo from "shared/assets/icons/theme-icon.svg"
import { Theme, TTheme } from "app/providers/ThemeProvider/lib/ThemeContext"

// up ts
export const LogoColor: Record<TTheme, string> = {
  [Theme.LIGHT]: "blue",
  [Theme.DARK]: "white",
} as const

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={cn("theme-switcher", {}, [className])}
      onClick={toggleTheme}
    >
      <Logo fill={LogoColor[theme]} />
    </Button>
  )
}
