import './ArticleImageBlockComponent.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames as cn } from '@/g-shared/lib/classNames'

interface ArticleImageBlockComponentProps {
    className?: string
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (
    props,
) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <div className={cn('ArticleImageBlockComponent', {}, [className])}>
            ArticleImageBlockComponent
        </div>
    )
}
