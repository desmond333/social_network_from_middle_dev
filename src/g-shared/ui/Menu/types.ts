import { Direction } from '@/g-shared/ui/types'

export type MenuDirection = Exclude<Direction, 'row-reverse' | 'column-reverse'>
