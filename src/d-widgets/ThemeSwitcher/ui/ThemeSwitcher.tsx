import { classNames as cn } from "shared/lib/classNames"
import "./ThemeSwitcher.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { Button } from "shared/ui"
// todo: сделать компонент Лого по канону
import Logo from "shared/assets/icons/icon--theme.svg"
import { Theme, TTheme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { BtnVariant } from "shared/ui/Button/types"

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
      variant={BtnVariant.CLEAR}
      onClick={toggleTheme}
    >
      <Logo fill={LogoColor[theme]} />
    </Button>
  )
}
