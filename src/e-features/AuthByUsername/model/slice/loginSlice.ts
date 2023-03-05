import { createSlice } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"

const initialState: LoginSchema = {
  isLoading: false,
  username: "",
  password: "",
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
  },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice