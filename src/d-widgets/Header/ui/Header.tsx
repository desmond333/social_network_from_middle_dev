import { classNames as cn } from "shared/lib/classNames"
import "./Header.scss"
import { Column, Row, Space } from "shared/ui"
import { LangSwitcher } from "../../LangSwitcher"
import { Authentication } from "d-widgets/Header/ui/HeaderParts/Authentication"
import { H2 } from "shared/ui/Text"
import { useTranslation } from "react-i18next"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation()
  

  return (
    <header className={cn("header", {}, [className])}>
      <Row justify="space-between" isFullHeight>
        <Column col={7} alignSelf="center">
          <div style={{ paddingLeft: "10px" }}>
            <H2 color={"secondary"}>{t("PROJECT_NAME")}{` by Desmond333`}</H2>
          </div>
        </Column>
        <Column col={2} alignSelf="center">
          <Space columnGap="level3">
            <LangSwitcher />
            <Authentication />
          </Space>
        </Column>
      </Row>
    </header>
  )
}
