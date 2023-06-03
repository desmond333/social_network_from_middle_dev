import './ArticleDetailsPage.scss'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/f-entities/Article'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'

interface ArticlesDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div className={cn('ArticleDetailsPage', {}, [className])}>
                Статья не найдена
            </div>
        )
    }

    return (
        <div className={cn('ArticleDetailsPage', {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    )
}
