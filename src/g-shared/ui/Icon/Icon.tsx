import { FC, ReactNode, SVGProps } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { IconSize, Stroke } from '@/g-shared/ui/types'

export type IconProps = {
  icons?: FC<SVGProps<SVGSVGElement>>
  name?: string
  size?: IconSize
  stroke?: Stroke
  fill?: Stroke
}

export const Icon: FC<IconProps> = (props) => {
  const {
    name,
    size = 'base',
    stroke = 'none',
    fill = 'primary',
    icons,
  } = props

  const SVG = icons || 'svg'
  return (
    <SVG
      className={cn(
        'icon',
        {
          [`icon--size-${size}`]: size,
          [`icon--stroke-${stroke}`]: stroke,
          [`icon--fill-${fill}`]: fill,
        },
        [name]
      )}
    />
  )
}

type IconListProps = {
  items: {
    icon: ReactNode
    name: string
  }[]
}

export const IconList: FC<IconListProps> = ({ items = [] }) => {
  return (
    <ul className="icon__list">
      {items.map((item, index) => (
        <li className="icon__list-item" key={index}>
          {item.icon}
          <span className="icon__list-item-name">{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
