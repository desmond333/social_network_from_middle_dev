import { FC, ReactNode } from 'react';
import { ColumnGap } from '../Row/types';
import { SpaceRowGap } from './types';
import { Align, Direction } from '../../types';
import { classNames as cn } from '@/g-shared/lib/classNames';

// компонент для создания пространства между двух блоков

type SpaceProps = {
  children: ReactNode
  align?: Align
  direction?: Direction
  flex?: boolean
  wrap?: 'wrap' | 'wrap-reverse'
  rowGap?: SpaceRowGap
  columnGap?: ColumnGap
  breakpoints?: {
    md?: SpaceTypes
    lg?: SpaceTypes
    xl?: SpaceTypes
    xxl?: SpaceTypes
  }
}

type SpaceTypes = {
  align?: Align
  direction?: Direction
}

export const Space: FC<SpaceProps> = (props) => {
    const {
        children,
        align,
        flex,
        wrap,
        direction,
        rowGap,
        columnGap,
        breakpoints,
    } = props;

    let breakpointsValue = '';

    breakpoints
    && Object.keys(breakpoints).forEach((key) => {
        const isKeyCorrected = key === 'md' || key === 'lg' || key === 'xl' || key === 'xxl';

        if (isKeyCorrected && breakpoints[key]?.align) {
            breakpointsValue += `space--${key}-align-${breakpoints[key]?.align} `;
        }
        if (isKeyCorrected && breakpoints[key]?.direction) {
            breakpointsValue += `space--${key}-direction-${breakpoints[key]?.direction} `;
        }
    });

    return (
        <div
            className={cn(
                'space',
                {
                    [`space--align-${align}`]: align,
                    [`space--direction-${direction}`]: direction,
                    [`space--row-gap-${rowGap}`]: rowGap,
                    [`space--column-gap-${columnGap}`]: columnGap,
                    [`space--${wrap}`]: wrap,
                    'space--display-flex': flex,
                },
                [breakpointsValue],
            )}
        >
            {children}
        </div>
    );
};
