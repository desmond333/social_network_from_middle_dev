import './ArticleDetails.scss'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
    useGetArticleDetailsData,
    useGetArticleDetailsError,
    useGetArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { DynamicModuleLoader } from '@/g-shared/lib/components/DynamicModuleLoader'
import { ReducersList } from '@/g-shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/g-shared/lib/hooks/UseAppDispatch'
import { BlockAlignText, Loader } from '@/g-shared/ui'

interface ArticleDetailsProps {
    id: string
    className?: string
}

// очищаем reducer потому что можем не вернуться на эту статью
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const article = useGetArticleDetailsData()
    const isLoading = useGetArticleDetailsIsLoading()
    const error = useGetArticleDetailsError()

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content = <div>ArticleDetails</div>

    if (isLoading) {
        content = (
            <div>
                <Loader />
            </div>
        )
    }
    if (error) content = <BlockAlignText>Произошла ошибка</BlockAlignText>

    return (
        <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
            <div className={cn('ArticleDetails', {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
