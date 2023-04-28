export const BtnVariant = {
  CLEAR: 'btn--clear',
  FLAT: 'btn--flat',
  OUTLINE: 'btn--outline',
  ICON: 'btn--icon',
  BACKGROUND: 'btn--background',
  BACKGROUND_INV: 'btn--background-inv',
} as const

export type TBtnVariant = (typeof BtnVariant)[keyof typeof BtnVariant]

export const BtnSize = {
  M: 'button--square--size-m',
  L: 'button--square--size-l',
  XL: 'button--square--size-xl',
} as const

export type TBtnSize = (typeof BtnSize)[keyof typeof BtnSize]
