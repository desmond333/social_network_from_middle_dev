import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"
import { ContainerSize } from "shared/ui/Grid/Container/types"

type ContainerProps = {
  children: ReactNode
  size?: ContainerSize
}

export const Container: FC<ContainerProps> = ({ children, size }) => {
  return (
    <div className={cn("container", { [`container--${size}`]: size })}>
      {children}
    </div>
  )
}
