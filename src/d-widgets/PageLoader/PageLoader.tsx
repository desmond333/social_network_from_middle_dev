import { FC } from 'react';
import { classNames as cn } from '@/g-shared/lib/classNames/classNames';
import './PageLoader.scss';
import { Loader } from '@/g-shared/ui';

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <section className={cn('page-loader', {}, [className])}>
            <Loader />
        </section>
    );
};
