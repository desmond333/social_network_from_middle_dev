import { FC, useState } from "react"
import { ThemeSwitcher } from "../../../ThemeSwitcher"
import { SidebarItemsList } from "../../model/items"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import "./Sidebar.scss"
import { useTheme, Theme } from "@/app/providers/ThemeProvider"
import { classNames as cn } from "@/g-shared/lib/classNames"
import { Button, Column, Row } from "@/g-shared/ui"
import { Menu } from "@/g-shared/ui"
import { BtnSize, BtnVariant } from "@/g-shared/ui/Button/types"

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

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
