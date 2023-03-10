import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  TTheme,
} from "./ThemeContext"
import { useContext } from "react"

interface UseThemeResult {
  toggleTheme: () => void
  theme: TTheme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

    setTheme(newTheme)

    //up js
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
