import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "entities/User"
import axios from "axios"

interface LoginByUsername {
  username: string;
  password: string;
}

// up high 34
export const loginByUsername = createAsyncThunk<User, LoginByUsername>("loginByUsername",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8000/login", authData)

      // считаем пустые данные за ошибку
      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue("error")
    }
  })