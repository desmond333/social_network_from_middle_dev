import { InputHTMLAttributes, ReactNode } from 'react'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>

export interface InputProps extends HTMLInputProps {
    variant?: InputVariant
    name: string
    onChange?: (value: string) => void
    type: InputType
    value?: string
    placeholder?: string
    disabled?: boolean
    label?: {
        left?: string
        right?: ReactNode
    }
    error?: boolean
    maxLength?: number
    icon?: {
        left?: ReactNode
        right?: ReactNode
    }
    required?: boolean
    autoComplete?: 'on' | 'off'
    inputMode?: InputMode
    noti?: string
    readonly?: boolean
}

export type InputVariant = 'without'

export type InputType = 'text' | 'tel' | 'number' | 'email' | 'password'

export type InputMode =
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url'
