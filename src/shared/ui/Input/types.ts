import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

export interface InputProps extends HTMLInputProps {
  variant?: InputVariant;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: InputType;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: {
    left?: string;
    right?: ReactNode;
  };
  error?: boolean;
  maxLength?: number;
  icon?: {
    left?: ReactNode;
    right?: ReactNode;
  };
  required?: boolean;
  autoComplete?: "on" | "off";
  inputMode?: InputMode;
  noti?: string;
}

export type InputVariant = "without";

export type InputType = "text" | "tel" | "number" | "email" | "password";

export type InputMode =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";