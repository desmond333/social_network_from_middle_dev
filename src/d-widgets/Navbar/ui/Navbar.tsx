import { classNames as cn } from "shared/lib/classNames"
import "./Navbar.scss"
import { AppLink } from "shared/ui"
import { LangSwitcher } from "d-widgets/LangSwitcher"
import { ThemeSwitcher } from "d-widgets/ThemeSwitcher"
import { useTranslation } from "react-i18next"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={cn("navbar", {}, [className])}>
      <LangSwitcher />
      <ThemeSwitcher />
      <AppLink to={"/"}>{t('MAIN_PAGE_LINK')}</AppLink>
      <AppLink to={"/about"}>{t('ABOUT_PAGE_LINK')}</AppLink>
    </div>
  )
}
