import { classNames as cn } from "shared/lib/classNames"
import "./Navbar.scss"
import { AppLink } from "shared/ui"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn("navbar", {}, [className])}>
      <LangSwitcher />
      <ThemeSwitcher />
      <AppLink to={"/"}>Главная</AppLink>
      <AppLink to={"/about"}>О сайте</AppLink>
    </div>
  )
}
