import { classNames as cn } from "shared/lib/classNames"
import "./Header.scss"
import { Column, Row } from "shared/ui"
import { LangSwitcher } from "../../LangSwitcher"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("header", {}, [className])}>
      <Row justify="flex-end">
        <Column col={2} alignSelf="center">
          <LangSwitcher />
        </Column>
      </Row>
    </header>
  )
}
