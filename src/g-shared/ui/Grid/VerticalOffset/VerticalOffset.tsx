import { FC, ReactNode } from "react"
import { classNames as cn } from "@/g-shared/lib/classNames"
import { RowGap } from "@/g-shared/ui/Grid/Row/types"

type VerticalOffsetProps = {
  offset?: RowGap
  variant?: "row-gap" | "margin"
  children?: ReactNode
}

export const VerticalOffset: FC<VerticalOffsetProps> = ({
                                                          offset,
                                                          children,
                                                          variant = "row-gap",
                                                        }) => {
  return (
    <>
      {variant === "row-gap" && (
        <div
          className={cn("vertical-offset", {
            [`vertical-offset--${offset}`]: offset,
          })}
        >
          {children}
        </div>
      )}

      {variant === "margin" && (
        <div
          className={cn("vertical-offset-margin", {
            [`vertical-offset-margin--${offset}`]: offset,
          })}
        >
          {children}
        </div>
      )}
    </>
  )
}
