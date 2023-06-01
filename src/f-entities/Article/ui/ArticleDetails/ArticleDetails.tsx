import './ArticleDetails.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { DynamicModuleLoader } from '@/g-shared/lib/components/DynamicModuleLoader'
import { ReducersList } from '@/g-shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface ArticleDetailsProps {
    className?: string
}

// очищаем reducer потому что можем не вернуться на эту статью
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
            <div className={cn('ArticleDetails', {}, [className])}>
                ArticleDetails
            </div>
        </DynamicModuleLoader>
    )
}
