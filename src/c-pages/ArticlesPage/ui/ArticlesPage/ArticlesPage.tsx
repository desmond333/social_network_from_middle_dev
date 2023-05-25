import './ArticlesPage.scss'
import { FC } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'

interface ArticlesPageProps {
    className?: string
}

export const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props

    return (
        <div className={cn('ArticlesPage', {}, [className])}>ArticlesPage</div>
    )
}
