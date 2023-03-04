export const BtnVariant = {
  CLEAR: "clear",
  OUTLINE: "outline",
  BACKGROUND: "background",
  BACKGROUND_INV: "background-inv",
  ICON: "icon",
} as const

export type TBtnVariant = typeof BtnVariant[keyof typeof BtnVariant]

export const BtnSize = {
  M: "button--square--size-m",
  L: "button--square--size-l",
  XL: "button--square--size-xl",
} as const

export type TBtnSize = typeof BtnSize[keyof typeof BtnSize]