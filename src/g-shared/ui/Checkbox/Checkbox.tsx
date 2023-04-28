import { FC, ReactNode, useState } from 'react'
import { BodyXl } from '../Text'

type CheckboxProps = {
  name: string
  value: string
  checked?: boolean
  disabled?: boolean
  label?: string
  children?: ReactNode
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    name = ' ',
    value = ' ',
    checked = false,
    disabled = false,
    label,
    children,
  } = props

  const [checkboxChecked, setCheckboxChecked] = useState(checked)

  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor={name}>
        <input
          className="checkbox__input"
          type="checkbox"
          name={name}
          id={name}
          value={value}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
          checked={checkboxChecked}
          disabled={disabled}
        />
        <span className="checkbox__visual"></span>

        {label && (
          <div className="checkbox__content">
            <BodyXl>{label}</BodyXl>
          </div>
        )}
      </label>

      {children}
    </div>
  )
}
