import { classNames as cn } from "shared/lib/classNames"
import "./Header.scss"
import { AppLink, Column, Row } from "shared/ui"
import { LangSwitcher } from "d-widgets/LangSwitcher"
import { useTranslation } from "react-i18next"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation()

  return (
    <header className={cn("header", {}, [className])}>
      <Row justify="space-between">
        <Column col={2} alignSelf="center">
          <LangSwitcher />
        </Column>
        <Column col={2}>
          <Row rowGap="level1">
            <Column alignSelf="center">
              <AppLink to={"/"}>{t("MAIN_PAGE_LINK")}</AppLink>
            </Column>
            <Column alignSelf="center">
              <AppLink to={"/about"}>{t("ABOUT_PAGE_LINK")}</AppLink>
            </Column>
          </Row>
        </Column>
      </Row>
    </header>
  )
}
