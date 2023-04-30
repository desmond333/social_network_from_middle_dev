import { FC, ReactNode } from 'react';
import { classNames as cn } from '@/g-shared/lib/classNames';
import { BlockAlign } from '@/g-shared/ui/BlockAlignText/types';

// компонент для текста и вертикального его размещения

type BlockAlignTextProps = {
  children: ReactNode
  align?: BlockAlign
  breakpoints?: {
    md?: BlockAlignTextTypes
    lg?: BlockAlignTextTypes
    xl?: BlockAlignTextTypes
    xxl?: BlockAlignTextTypes
  }
}

type BlockAlignTextTypes = {
  align?: BlockAlign
}

export const BlockAlignText: FC<BlockAlignTextProps> = ({
    children,
    align,
    breakpoints,
}) => {
    let breakpointsValue = '';

    breakpoints
    && Object.keys(breakpoints).forEach((key) => {
        const isKeyCorrected = key === 'md' || key === 'lg' || key === 'xl' || key === 'xxl';

        if (isKeyCorrected && breakpoints[key]?.align) {
            breakpointsValue += `block-align-text--${key}-align-${breakpoints[key]?.align} `;
        }
    });

    return (
        <div
            className={cn(
                'block-align-text',
                {
                    [`block-align-text--align-${align}`]: align,
                },
                [breakpointsValue],
            )}
        >
            {children}
        </div>
    );
};
