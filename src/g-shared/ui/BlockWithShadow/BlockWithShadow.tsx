import { FC, ReactNode } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'
import './BlockWithShadow.scss'

interface BlockWithShadowProps {
  children: ReactNode
  className?: string
}

export const BlockWithShadow: FC<BlockWithShadowProps> = (props) => {
  const { children, className } = props

  return (
    <div className={cn('block-with-shadow', {}, [className])}>{children}</div>
  )
}
