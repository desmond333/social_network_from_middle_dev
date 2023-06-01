import './ArticleCodeBlockComponent.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames as cn } from '@/g-shared/lib/classNames'

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
    props,
) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <div className={cn('ArticleCodeBlockComponent', {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    )
}
