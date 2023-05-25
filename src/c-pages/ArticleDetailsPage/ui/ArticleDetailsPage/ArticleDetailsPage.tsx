import './ArticleDetailsPage.scss'
import { FC } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'

interface ArticlesDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props

    return (
        <div className={cn('ArticleDetailsPage', {}, [className])}>
            ArticlesDetailsPage
        </div>
    )
}
