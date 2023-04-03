import { FC, useState } from "react"
import { classNames as cn } from "shared/lib/classNames"
import "./Sidebar.scss"
import { Button, Column, Row } from "shared/ui"
import { useTranslation } from "react-i18next"
import { ThemeSwitcher } from "../../../ThemeSwitcher"
import { Menu } from "shared/ui"
import { useTheme, Theme } from "app/providers/ThemeProvider"
import { BtnSize, BtnVariant } from "shared/ui/Button/types"
import { SidebarItem } from "d-widgets/Sidebar/ui/SidebarItem/SidebarItem"
import { SidebarItemsList } from "d-widgets/Sidebar/model/items"

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
            {SidebarItemsList.map((item) =>
              <SidebarItem item={item} key={item.path} />)}
          </Menu>
        </Column>
        <Column isFlexNone>
          <Row>
            <Column>
              <ThemeSwitcher />
            </Column>
            <Column>
              <Button
                onClick={() => setIsCollapsed(prev => !prev)}
                variant={BtnVariant.BACKGROUND}
                btnSquareSize={BtnSize.XL}
              >
                {isCollapsed ? ">" : "<"}
              </Button>
            </Column>
          </Row>
        </Column>
      </Row>
    </aside>
  )
}
