import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig, ThunkExtraArg } from "@/app/providers/StoreProvider"
import { User, userActions } from "@/f-entities/User"
import i18n from "@/g-shared/config/internalization/i18n"
import { USER_LS_KEY } from "@/g-shared/const/localstorage"

interface LoginByUsernameProps {
  username: string;
  password: string;
}

// up high 34
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("loginByUsername",
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.post<User>("/login", authData)

      // считаем пустые данные с сервера за ошибку
      if (!response.data) throw new Error()

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue(i18n.t("ERROR_LOGIN"))
    }
  })