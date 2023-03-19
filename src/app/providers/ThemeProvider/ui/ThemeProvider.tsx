import { FC, useState } from "react"
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  TTheme,
} from "../lib/ThemeContext"

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: TTheme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props
  const [theme, setTheme] = useState<TTheme>(initialTheme || defaultTheme)

  const defaultProps = {
    theme: theme,
    setTheme: setTheme,
  }

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
