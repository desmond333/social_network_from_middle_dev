import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"
import { OffsetSize } from "shared/ui/Grid/VerticalOffset/types"

type VerticalOffsetProps = {
  offset?: OffsetSize
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
