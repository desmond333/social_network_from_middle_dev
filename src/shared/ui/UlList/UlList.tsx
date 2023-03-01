import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"
import { RowGap } from "shared/ui/Grid/Row/types"
import { UiListVariant } from "shared/ui/UlList/types"

type UlListProps = {
  children: ReactNode;
  rowGap?: RowGap;
  variant?: UiListVariant;
};


export const UlList: FC<UlListProps> = ({
                                          rowGap = "const-level1",
                                          variant = "no-style",
                                          children,
                                        }) => (
  <ul
    className={cn("ul-list", {
      [`ul-list--gap-${rowGap}`]: rowGap,
      [`ul-list--${variant}`]: variant,
    })}
  >
    {children}
  </ul>
)

type UlListItemProps = {
  children: ReactNode;
};

export const UlListItem: FC<UlListItemProps> = ({ children }) => (
  <li className="ul-list__item">{children}</li>
)
