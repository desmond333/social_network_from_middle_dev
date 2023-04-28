import { ButtonHTMLAttributes, FC, memo } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames'
import './Button.scss'
import { TBtnSize, TBtnVariant } from '@/g-shared/ui/Button/types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: TBtnVariant
  btnSquareSize?: TBtnSize
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { className, variant, btnSquareSize, children, ...otherProps } = props

  // const mods: Record<string, boolean> = {
  //   square: square
  // }
  const additionalClasses = [className, variant, btnSquareSize]

  return (
    <button className={cn('button', {}, additionalClasses)} {...otherProps}>
      {children}
    </button>
  )
})
