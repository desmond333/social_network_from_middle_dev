import { classNames as cn } from "shared/lib/classNames"
import "./Sidebar.scss"
import { useState } from "react"
import { Button } from "shared/ui"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return <div className={cn("sidebar", { "collapsed": isCollapsed }, [className])}>
    <Button onClick={() => setIsCollapsed(prev => !prev)}>Toggle</Button>
  </div>
}
