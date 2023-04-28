export type Align =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  | 'end'
  | 'initial'
  | 'inherit'
  | 'normal'
  | 'revert'
  | 'self-end'
  | 'self-start'
  | 'start'
  | 'unset'

export type Justify =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-between'
  | 'space-around'

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

// up ts
export type Size =
  | 'base'
  | 'auto'
  | 'fluid'
  | 'xxsm'
  | 'xsm'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
export type IconSize = Exclude<Size, 'fluid'>
export type ContainerSize = Extract<Size, 'fluid' | 'md' | 'lg' | 'xl' | 'xxl'>
export type ModalWrapperSize = Extract<Size, 'base' | 'sm' | 'md'>

export type TextColors =
  | 'primary'
  | 'secondary'
  | 'third'
  | 'four'
  | 'five'
  | 'six'
  | 'danger'

export type Stroke =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'fourt'
  | 'success'
  | 'error'
  | 'none'
