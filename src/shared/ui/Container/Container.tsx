import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"

type ContainerProps = {
  children: ReactNode
  size?: Size
}

type Size = "fluid" | "md" | "lg" | "xl" | "xxl"

export const Container: FC<ContainerProps> = ({ children, size }) => {
  return (
    <div className={cn("container", { [`container--${size}`]: size })}>
      {children}
    </div>
  )
}
