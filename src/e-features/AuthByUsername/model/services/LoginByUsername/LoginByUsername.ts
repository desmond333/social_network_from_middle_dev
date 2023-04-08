import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "entities/User"
import axios from "axios"
import i18n from "shared/config/internalization/i18n"

interface LoginByUsernameProps {
  username: string;
  password: string;
}

// up high 34
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>("loginByUsername",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8000/login", authData)

      // считаем пустые данные с сервера за ошибку
      if (!response.data) throw new Error()

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(i18n.t("ERROR_LOGIN"))
    }
  })