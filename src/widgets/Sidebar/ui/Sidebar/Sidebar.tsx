import { classNames as cn } from "shared/lib/classNames"
import "./Sidebar.scss"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  return <div className={cn("sidebar", {}, [className])}>Sidebar</div>
}
