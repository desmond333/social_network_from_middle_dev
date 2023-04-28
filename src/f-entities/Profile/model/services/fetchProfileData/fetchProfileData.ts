import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../../index'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import i18n from '@/g-shared/config/internalization/i18n'

// up high 39
export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI

  try {
    const response = await extra.api.get<Profile>('/profile')

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue(i18n.t('ERROR_LOGIN'))
  }
})
