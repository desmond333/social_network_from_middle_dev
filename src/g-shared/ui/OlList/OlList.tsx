import { FC, ReactNode } from "react"
import { classNames as cn } from "@/g-shared/lib/classNames"
import { RowGap } from "@/g-shared/ui/Grid/Row/types"
import { SizeText } from "@/g-shared/ui/Text/types"
import { TextColors } from "@/g-shared/ui/types"

type OlListProps = {
  children: ReactNode;
  rowGap?: RowGap;
  sizeText?: SizeText;
  colorText?: TextColors;
};

export const OlList: FC<OlListProps> = ({
                                          rowGap,
                                          sizeText,
                                          colorText = "primary",
                                          children,
                                        }) => (
  <ol
    className={cn("ol-list", {
      [`ol-list--gap-${rowGap}`]: rowGap,
      [`ol-list--text-size-${sizeText}`]: sizeText,
      [`ol-list--text-color-${colorText}`]: colorText,
    })}
  >
    {children}
  </ol>
)

type OlListItemProps = {
  children: ReactNode;
};

export const OlListItem: FC<OlListItemProps> = ({ children }) => (
  <li className="ol-list__item">
    <div className="ol-list__item-body">{children}</div>
  </li>
)
