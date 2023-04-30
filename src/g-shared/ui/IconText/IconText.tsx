import { FC, ReactNode } from 'react';
import { Align, Direction } from '../types';
import { ColumnGap, RowGap } from '../Grid/Row/types';
import { classNames as cn } from '@/g-shared/lib/classNames';

type IconTextProps = {
  children: ReactNode
  align?: IconAlign
  rowGap?: RowGap
  columnGap?: ColumnGap
  direction?: IconDirection
}

type IconDirection = Extract<Direction, 'row' | 'column'>
type IconAlign = Extract<
  Align,
  'center' | 'flex-end' | 'flex-start' | 'stretch'
>

export const IconText: FC<IconTextProps> = (props) => {
    const {
        children, align, rowGap, columnGap, direction = 'row',
    } = props;

    return (
        <div
            className={cn('icon-text', {
                [`icon-text--${align}`]: align,
                [`icon-text--row-gap-${rowGap}`]: rowGap,
                [`icon-text--${direction}`]: direction,
                [`icon-text--column-gap-${columnGap}`]: columnGap,
            })}
        >
            {children}
        </div>
    );
};
