import { FC } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames'
import ImgLog from '../../assets/images/img-logo.svg'
import { AppLink } from '@/g-shared/ui'

type LogoProps = {
  size?: Size
}

export type Size = 'lg'

export const Logo: FC<LogoProps> = ({ size }) => {
  return (
    <AppLink to={'/'} className="logo">
      <div
        className={cn('logo__content', {
          [`logo__content--size-${size}`]: size,
        })}
      >
        <ImgLog />
      </div>
    </AppLink>
  )
}
