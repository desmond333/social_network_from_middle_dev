import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginByUsername } from "../services/LoginByUsername/LoginByUsername"

const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //         state.error =
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //
  //     })
  // },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice