import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"

type RowProps = {
  children?: ReactNode
  align?: Align
  justify?: Justify
  direction?: Direction
  rowGap?: RowGap
  noGutters?: boolean
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
  align?: Align
  justify?: Justify
}

type Align = "center" | "flex-end" | "flex-start" | "stretch"

type Justify =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-between"
  | "space-around"

type RowGap =
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5"
  | "level6"
  | "level7"
  | "level8"
  | "level9"
  | "level10"
  | "constancy-level1"
  | "constancy-level2"
  | "constancy-level3"
  | "constancy-level4"
  | "constancy-level5"

type Direction = "row" | "column" | "row-reverse" | "column-reverse"

export const Row: FC<RowProps> = ({
  align,
  justify,
  direction,
  children,
  rowGap,
  noGutters = false,
  breakpoints,
}) => {
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
        },
        [breakpointsValue]
      )}
    >
      {children}
    </div>
  )
}
