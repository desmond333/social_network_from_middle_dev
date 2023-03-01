import React, { ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"
import { RowAlign, ColumnGap, RowGap } from "shared/ui/Grid/Row/types"
import { MenuDirection } from "shared/ui/Menu/types"

type MenuProps = {
  children: ReactNode;
  direction?: MenuDirection;
  align?: RowAlign;
  rowGap?: RowGap;
  columnGap?: ColumnGap;
};

export const Menu: React.FC<MenuProps> = ({
                                            children,
                                            direction = "row",
                                            align,
                                            rowGap = "level1",
                                            columnGap = "level1",
                                          }) => (
  <nav className="menu">
    <ul
      className={cn("menu__list", {
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

type MenuItemProps = {
  children: React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <li className="menu__item">{children}</li>
)
