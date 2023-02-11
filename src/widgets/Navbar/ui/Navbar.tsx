import cn from "shared/lib/classNames/classNames";
import "./Navbar.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn("navbar", {}, [className])}>
      <AppLink to={"/"}>Главная</AppLink>
      <AppLink to={"/about"}>О сайте</AppLink>
    </div>
  );
};