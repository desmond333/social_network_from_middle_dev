import { ChangeEvent, FC, useState } from "react"
import { classNames as cn } from "@/g-shared/lib/classNames"
import { FormInputText } from "@/g-shared/ui/Text"
import { IconDanger } from "@/g-shared/ui"
import { InputProps } from "./types"

export const InputActions: FC<InputProps> = (props) => {
  const {
    variant,
    name,
    type = "text",
    value = "",
    placeholder = "Поле ввода",
    disabled = false,
    label,
    error = false,
    maxLength,
    icon,
    onChange,
    required,
    autoComplete = "off",
    inputMode = "none",
    noti,
  } = props

  const [valueInput, setValueInput] = useState<string>(value)
  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)

    setValueInput(e.target.value)
  }
  const [focusPlaceholder, setFocusPlaceholder] = useState(false)

  const handleFocusPlaceholder = () => {
    setFocusPlaceholder(!focusPlaceholder)
  }
  const handleBlurPlaceholder = () => {
    setFocusPlaceholder(!focusPlaceholder)
  }

  const isPlaceholderTop = focusPlaceholder || valueInput

  return (
    <div
      className={cn("input", {
        "input--error": error,
        [`input--${variant}`]: variant,
        "input--icon-left": Boolean(icon?.left),
      })}
    >
      {label && (
        <label htmlFor={name} className="input__label">
          <FormInputText>{label?.left}</FormInputText>
          {label?.right}
        </label>
      )}

      <div
        className={cn("input__body", { "input__body--disabled": disabled })}
        tabIndex={1}
        onFocus={handleFocusPlaceholder}
        onBlur={handleBlurPlaceholder}
      >
        {icon?.left && <div className="input__icon">{icon.left}</div>}

        <input
          className="input__input"
          type={type}
          name={name}
          id={name}
          value={valueInput}
          disabled={disabled}
          maxLength={maxLength}
          onChange={changeInputHandler}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
        />
        <div
          className={cn("input__placeholder", {
            "input__placeholder--focus": isPlaceholderTop,
          })}
        >
          <FormInputText tag="span">{placeholder}</FormInputText>
        </div>

        {icon?.right && <div className="input__icon">{icon.right}</div>}
        {error && (
          <div className={cn("input__icon", { "input__icon--error": error })}>
            {/*<IconDanger className="icon icon--danger icon--size-sm" />*/}
            <IconDanger />
          </div>
        )}
      </div>

      {error && (
        <div className="input__error">
          <FormInputText tag="span">{noti}</FormInputText>
        </div>
      )}
    </div>
  )
}