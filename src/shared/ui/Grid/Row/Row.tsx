import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"
import { RowAlign, RowGap } from "shared/ui/Grid/Row/types"
import { Direction, Justify } from "shared/ui/types"

type RowProps = {
  children?: ReactNode
  align?: RowAlign
  justify?: Justify
  direction?: Direction
  rowGap?: RowGap
  noGutters?: boolean
  isFullHeight?: boolean
  breakpoints?: {
    md?: RowTypes
    lg?: RowTypes
    xl?: RowTypes
    xxl?: RowTypes
  }
}

type RowTypes = {
  rowGap?: RowGap
  direction?: Direction
  align?: RowAlign
  justify?: Justify
}

export const Row: FC<RowProps> = (props) => {
  const {
    align,
    justify,
    direction,
    children,
    rowGap,
    noGutters = false,
    breakpoints,
    isFullHeight
  } = props

  let breakpointsValue = ""

  breakpoints &&
  Object.keys(breakpoints).forEach((key) => {
    const isKeyCorrected =
      key === "md" || key === "lg" || key === "xl" || key === "xxl"

    if (isKeyCorrected && breakpoints[key]?.direction) {
      breakpointsValue += `row--${key}-${breakpoints[key]?.direction} `
    }

    if (isKeyCorrected && breakpoints[key]?.align) {
      breakpointsValue += `row--${key}-align-${breakpoints[key]?.align} `
    }

    if (isKeyCorrected && breakpoints[key]?.justify) {
      breakpointsValue += `row--${key}-justify-${breakpoints[key]?.justify} `
    }
  })

  return (
    <div
      className={cn(
        "row",
        {
          [`row--${direction}`]: direction,
          "row--no-gutters": noGutters,
          [`row--align-${align}`]: align,
          [`row--justify-${justify}`]: justify,
          [`row--row-gap-${rowGap}`]: rowGap,
          [`row--row-full-height`]: isFullHeight,
        },
        [breakpointsValue],
      )}
    >
      {children}
    </div>
  )
}
