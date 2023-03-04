import { ChangeEvent, ReactNode } from "react"

export type InputProps = {
  variant?: InputVariant;
  name: string;
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: "on" | "off";
  inputMode?: InputMode;
  noti?: string;
};

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