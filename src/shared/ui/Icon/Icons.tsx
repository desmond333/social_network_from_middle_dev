import { FC } from "react"
import IconArrowDownBase from "../../assets/icons/icon--arrow-down.svg"
import IconCloseBase from "../../assets/icons//icon--close.svg"
import IconDangerBase from "../../assets/icons//icon--danger.svg"
import IconMenuBase from "../../assets/icons/icon--menu.svg"
import IconQuoteBase from "../../assets/icons/icon--quote.svg"

import { IconSize, Stroke } from "shared/ui/types"
import { Icon } from "./Icon"

type IconUIFillProps = {
  size?: IconSize;
  fill?: Stroke;
};

// type IconUIStrokeProps = {
//   size?: Size;
//   stroke?: Stroke;
// };

export const IconDanger: FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconDangerBase} name="icon--danger" size={size} fill={fill} />
)
export const IconClose: FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconCloseBase} name="icon--close" size={size} fill={fill} />
)
export const IconArrowDown: FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon
    icons={IconArrowDownBase}
    name="icon--arrow-down"
    size={size}
    fill={fill}
  />
)

export const IconQuote: FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconQuoteBase} name="icon--quote" size={size} fill={fill} />
)
export const IconMenu: FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconMenuBase} name="icon--menu" size={size} fill={fill} />
)
