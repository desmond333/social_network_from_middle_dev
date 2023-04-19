import React from "react"
import { classNames as cn } from "@/g-shared/lib/classNames"
import { AlignItems, AlignSelf, Col, Order } from "@/g-shared/ui/Grid/Column/types"

type ColumnProps = {
  children: React.ReactNode
  col?: Col
  order?: Order
  alignItems?: AlignSelf
  alignSelf?: AlignItems
  isFlexNone?: boolean
  isDisplayFlex?: boolean
  breakpoints?: {
    md?: ColumnTypes
    lg?: ColumnTypes
    xl?: ColumnTypes
    xxl?: ColumnTypes
  }
}

type ColumnTypes = Pick<ColumnProps, "col" | "order" | "alignSelf" | "alignItems">

export const Column: React.FC<ColumnProps> = (props) => {
  const {
    children,
    col,
    alignSelf,
    alignItems,
    order,
    breakpoints,
    isDisplayFlex,
    isFlexNone,
  } = props

  let breakpointsValue = ""

  breakpoints &&
  Object.keys(breakpoints).forEach((key) => {
    const isKeyCorrected =
      key === "md" || key === "lg" || key === "xl" || key === "xxl"

    if (isKeyCorrected && breakpoints[key]?.col) {
      breakpointsValue += `column--${key}-col-${breakpoints[key]?.col} `
    }
    if (isKeyCorrected && breakpoints[key]?.order) {
      breakpointsValue += `column--${key}-order-${breakpoints[key]?.order} `
    }
    if (isKeyCorrected && breakpoints[key]?.alignSelf) {
      breakpointsValue += `column--${key}-align-self-${breakpoints[key]?.alignSelf} `
    }
    if (isKeyCorrected && breakpoints[key]?.alignItems) {
      breakpointsValue += `column--${key}-align-self-${breakpoints[key]?.alignItems} `
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
          [`column--align-items-${alignItems}`]: alignItems,
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
