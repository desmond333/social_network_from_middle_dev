import { buildSelector } from '@/g-shared/lib/store'

export const [useGetArticleDetailsData, getArticleDetailsData] = buildSelector(
    (state) => state.articleDetails?.data,
)

export const [useGetArticleDetailsIsLoading, getArticleDetailsIsLoading] = buildSelector((state) => state.articleDetails?.isLoading)

export const [useGetArticleDetailsError, getArticleDetailsError] = buildSelector((state) => state.articleDetails?.error)
