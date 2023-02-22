import { FC, useMemo, useState } from "react"
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  TTheme,
} from "../lib/ThemeContext"

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || Theme.LIGHT

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
