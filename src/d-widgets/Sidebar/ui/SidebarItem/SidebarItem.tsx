import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./SidebarItem.scss"
import { AppLink } from "shared/ui"
import { IconText } from "shared/ui/IconText/IconText"
import { ISidebarItem } from "../../model/items"

interface SidebarItemProps {
  item: ISidebarItem
  className?: string;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { item, className } = props

  const { t } = useTranslation()

  // todo: сделать иконки независимыми от сворачивания
  return (
    <div className={cn("sidebar-item", {}, [className])}>
      <AppLink to={item.path}>
        <IconText columnGap={"level1"}>
          {item.icon}
          <span className={"sidebar-item__link"}>
                {t(`${item.text.toUpperCase()}_PAGE_LINK`)}
              </span>
        </IconText>
      </AppLink>
    </div>
  )
}