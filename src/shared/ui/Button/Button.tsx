import cn from "shared/lib/classNames/classNames";
import "./Button.scss";
import { ButtonHTMLAttributes, FC } from "react";

export const VariantButton = {
  CLEAR: "clear",
} as const;

export type TVariantButton = typeof VariantButton[keyof typeof VariantButton]

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TVariantButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = VariantButton.CLEAR,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={cn("button", {}, [className, variant])}
      {...otherProps}>
      {children}
    </button>
  );
};