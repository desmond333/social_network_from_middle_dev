import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article } from '@/f-entities/Article'
import i18n from '@/g-shared/config/internalization/i18n'

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>('articleDetails.ts/fetchArticleById', async (articleId, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
        const response = await extra.api.get<Article>(`/articles/${articleId}`)

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue(i18n.t('ERROR_LOGIN'))
    }
})
