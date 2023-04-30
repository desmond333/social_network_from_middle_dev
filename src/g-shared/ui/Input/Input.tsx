import {
    ChangeEvent, FC, memo, useState,
} from 'react';
import { classNames as cn } from '@/g-shared/lib/classNames';
import { FormInputText } from '../Text';
import { InputProps } from '@/g-shared/ui/Input/types';
import { IconDanger } from '@/g-shared/ui';

export const Input: FC<InputProps> = memo((props) => {
    const {
        variant,
        name,
        type = 'text',
        value = '',
        placeholder = 'Поле ввода',
        disabled = false,
        label,
        error = false,
        maxLength,
        icon,
        onChange,
        required,
        inputMode = 'none',
        autoComplete = 'off',
        noti,
    } = props;

    const [valueInput, setValueInput] = useState<string>(value);
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.target.value);
        setValueInput(e.target.value);
    };

    return (
        <div
            className={cn('input', {
                'input--error': error,
                [`input--${variant}`]: variant,
            })}
        >
            {label && (
                <label htmlFor={name} className="input__label">
                    <FormInputText>{label?.left}</FormInputText>
                    {label?.right}
                </label>
            )}

            <div
                className={cn('input__body', { 'input__body--disabled': disabled })}
                tabIndex={1}
            >
                {icon?.left && <div className="input__icon">{icon.left}</div>}

                <input
                    className="input__input"
                    type={type}
                    name={name}
                    id={name}
                    value={valueInput}
                    placeholder={placeholder}
                    disabled={disabled}
                    maxLength={maxLength}
                    onChange={changeInputHandler}
                    required={required}
                    inputMode={inputMode}
                    autoComplete={autoComplete}
                />

                {icon?.right && <div className="input__icon">{icon.right}</div>}
                {error && (
                    <div className={cn('input__icon', { 'input__icon--error': error })}>
                        {/* <IconDanger className="icon icon--danger icon--size-sm" /> */}
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
    );
});
