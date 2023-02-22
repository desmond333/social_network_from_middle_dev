import React from "react"
import { classNames as cn } from "shared/lib/classNames"

type ColumnProps = {
  children: React.ReactNode
  col?: Col
  order?: Order
  alignSelf?: AlignSelf
  display?: "flex"
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

type Col = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto"

type Order = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type AlignSelf =
  | "auto"
  | "normal"
  | "center"
  | "start"
  | "end"
  | "self-start"
  | "self-end"
  | "baseline"
  | "stretch"
  | "inherit"
  | "initial"
  | "unset"

export const Column: React.FC<ColumnProps> = ({
  children,
  col,
  alignSelf,
  order,
  breakpoints,
  display,
}) => {
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
          [`column--display-${display}`]: display,
        },
        [breakpointsValue]
      )}
    >
      {children}
    </div>
  )
}
