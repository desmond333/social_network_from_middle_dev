import { FC, ReactNode } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { RowAlign, ColumnGap, RowGap } from '@/g-shared/ui/Grid/Row/types'
import { MenuDirection } from '@/g-shared/ui/Menu/types'

type MenuProps = {
  children: ReactNode
  direction?: MenuDirection
  align?: RowAlign
  rowGap?: RowGap
  columnGap?: ColumnGap
}

export const Menu: FC<MenuProps> = (props) => {
  const {
    children,
    direction = 'row',
    align,
    rowGap = 'level1',
    columnGap = 'level1',
  } = props

  return (
    <nav className="menu">
      <ul
        className={cn('menu__list', {
          [`menu__list--${direction}`]: direction,
          [`menu__list--${align}`]: align,
          [`menu__list--row-gap-${rowGap}`]: rowGap,
          [`menu__list--column-gap-${columnGap}`]: columnGap,
        })}
      >
        {children}
      </ul>
    </nav>
  )
}

// up ts
type MenuItemProps = Pick<MenuProps, 'children'>

export const MenuItem: FC<MenuItemProps> = ({ children }) => (
  <li className="menu__item">{children}</li>
)
