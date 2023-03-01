import { ButtonHTMLAttributes, FC } from "react"
import { classNames as cn } from "shared/lib/classNames"
import "./Button.scss"

export const VariantButton = {
  CLEAR: "clear",
} as const

export type TVariantButton = typeof VariantButton[keyof typeof VariantButton]

// up ts
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: TVariantButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant,
    children,
    ...otherProps
  } = props

  return (
    <button className={cn("button", {}, [className, variant])} {...otherProps}>
      {children}
    </button>
  )
}
