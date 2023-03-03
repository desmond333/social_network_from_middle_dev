import React from "react"
import { classNames as cn } from "shared/lib/classNames"
import { AlignSelf, Col, Order } from "shared/ui/Grid/Column/types"

type ColumnProps = {
  children: React.ReactNode
  col?: Col
  order?: Order
  alignSelf?: AlignSelf
  isFlexNone?: boolean
  isDisplayFlex?: boolean
  breakpoints?: {
    md?: ColumnTypes
    lg?: ColumnTypes
    xl?: ColumnTypes
    xxl?: ColumnTypes
  }
}

type ColumnTypes = {
  col?: Col
  order?: Order
  alignSelf?: AlignSelf
}

export const Column: React.FC<ColumnProps> = (props) => {
  const {
    children,
    col,
    alignSelf,
    order,
    breakpoints,
    isDisplayFlex,
    isFlexNone
  } = props

  let breakpointsValue = ""

  breakpoints &&
  Object.keys(breakpoints).forEach((key) => {
    const isKeyCorrected =
      key === "md" || key === "lg" || key === "xl" || key === "xxl"

    if (isKeyCorrected && breakpoints[key]?.alignSelf) {
      breakpointsValue += `column--${key}-align-self-${breakpoints[key]?.alignSelf} `
    }
    if (isKeyCorrected && breakpoints[key]?.col) {
      breakpointsValue += `column--${key}-col-${breakpoints[key]?.col} `
    }

    if (isKeyCorrected && breakpoints[key]?.order) {
      breakpointsValue += `column--${key}-order-${breakpoints[key]?.order} `
    }
  })

  return (
    <div
      className={cn(
        "column",
        {
          [`column--col-${col}`]: col,
          [`column--order-${order}`]: order,
          [`column--align-self-${alignSelf}`]: alignSelf,
          [`column--display-flex`]: isDisplayFlex,
          [`column--display-flex-none`]: isFlexNone,
        },
        [breakpointsValue],
      )}
    >
      {children}
    </div>
  )
}
