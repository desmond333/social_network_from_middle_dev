import { classNames as cn } from "shared/lib/classNames"
import "./ThemeSwitcher.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { Button } from "shared/ui"
import Logo from "shared/assets/icons/theme-icon.svg"
import { Theme, TTheme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { VariantButton } from "shared/ui/Button/Button"

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
      variant={VariantButton.CLEAR}
      onClick={toggleTheme}
    >
      <Logo fill={LogoColor[theme]} />
    </Button>
  )
}