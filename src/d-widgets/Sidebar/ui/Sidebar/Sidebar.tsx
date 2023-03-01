import { FC, useState } from "react"
import { classNames as cn } from "shared/lib/classNames"
import "./Sidebar.scss"
import { Button, Column, Row } from "shared/ui"
import { useTranslation } from "react-i18next"
import { ThemeSwitcher } from "d-widgets/ThemeSwitcher"

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [isCollapsed, setIsCollapsed] = useState(false)
  const { t } = useTranslation()

  return (
    <aside className={cn("sidebar", { "collapsed": isCollapsed }, [className])}>
      <Row direction="column" justify="space-between">
        <Column alignSelf="center">
          <Button onClick={() => setIsCollapsed(prev => !prev)}>
            {t("TOGGLE_WIDTH_SIDEBAR")}
          </Button>
        </Column>
        <Column alignSelf="center">
          <ThemeSwitcher />
        </Column>
      </Row>
    </aside>
  )
}
