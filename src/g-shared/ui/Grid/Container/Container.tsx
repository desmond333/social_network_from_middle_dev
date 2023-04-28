import { FC, ReactNode } from 'react'
import { ContainerSize } from '../../types'
import { classNames as cn } from '@/g-shared/lib/classNames'

type ContainerProps = {
  children: ReactNode
  size?: ContainerSize
}

export const Container: FC<ContainerProps> = ({ children, size }) => {
  return (
    <div className={cn('container', { [`container--${size}`]: size })}>
      {children}
    </div>
  )
}
