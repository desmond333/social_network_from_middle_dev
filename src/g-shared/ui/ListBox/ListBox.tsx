import './ListBox.scss'
import { Listbox as HdListBox } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { Button } from '../Button/Button'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { Row } from '@/g-shared/ui'

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: 'options-bottom',
    top: 'options-top',
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props

    const optionsClasses = [mapDirectionClass[direction]]

    // В ListBox по хорошему еще можно вставить первый элемент в списке - это label и сделать его disabled
    // const listBoxOptions = useMemo(
    //     () => (compact
    //         ? [
    //             { value: '_label', content: label, disabled: true },
    //             ...items,
    //         ]
    //         : items),
    //     [compact, items, label],
    // )
    return (
        <Row rowGap="level4">
            {label && <span>{`${label}>`}</span>}
            <HdListBox
                disabled={readonly}
                as="div"
                className={cn('list-box', {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HdListBox.Button aria-disabled={readonly} className="trigger">
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HdListBox.Button>
                <HdListBox.Options
                    className={cn('options', {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HdListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={cn('item', {
                                        active,
                                        disabled: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HdListBox.Option>
                    ))}
                </HdListBox.Options>
            </HdListBox>
        </Row>
    )
}
