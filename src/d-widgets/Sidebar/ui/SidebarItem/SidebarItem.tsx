import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import './SidebarItem.scss'
import { ISidebarItem } from '../../model/items'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'
import { AppLink, IconText } from '@/g-shared/ui'

interface SidebarItemProps {
  item: ISidebarItem
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item } = props

  const { t } = useTranslation()

  // todo: сделать иконки независимыми от сворачивания
  return (
    <div className={cn('sidebar-item', {}, [])}>
      <AppLink to={item.path}>
        <IconText columnGap={'level1'}>
          {item.icon}
          <span className={'sidebar-item__link'}>
            {t(`${item.text.toUpperCase()}_PAGE_LINK`)}
          </span>
        </IconText>
      </AppLink>
    </div>
  )
})
