import { FC, useState } from "react"
import { classNames as cn } from "shared/lib/classNames"
import "./Sidebar.scss"
import { AppLink, Button, Column, Row } from "shared/ui"
import { useTranslation } from "react-i18next"
import { ThemeSwitcher } from "../../../ThemeSwitcher"
import { Menu, MenuItem } from "shared/ui"
import { useTheme, Theme } from "app/providers/ThemeProvider"

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()
  const { theme } = useTheme()

  const [isCollapsed, setIsCollapsed] = useState(false)

  const mods = {
    "sidebar--collapsed": isCollapsed,
    "sidebar--light": theme === Theme.LIGHT,
    "sidebar--dark": theme === Theme.DARK,
  }

  return (
    <aside className={cn("sidebar", mods, [className])}>
      <Row direction="column" justify="space-between" isFullHeight>
        <Column isFlexNone>
          <Menu direction="column" rowGap="level1">
            <MenuItem>
              <AppLink to={"/"}>{t("MAIN_PAGE_LINK")}</AppLink>
            </MenuItem>
            <MenuItem>
              <AppLink to={"/about"}>{t("ABOUT_PAGE_LINK")}</AppLink>
            </MenuItem>
          </Menu>
        </Column>
        <Column isFlexNone>
          <Row>
            <Column>
              <ThemeSwitcher />
            </Column>
            <Column>
              <Button onClick={() => setIsCollapsed(prev => !prev)}>
                {t("TOGGLE_WIDTH_SIDEBAR")}
              </Button>
            </Column>
          </Row>
        </Column>
      </Row>
    </aside>
  )
}
