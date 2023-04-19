import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Profile, ProfileSchema } from "../types/profile"

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
}

export const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setAuthData: (state, action: PayloadAction<Profile>) => {
    //   state.authData = action.payload
    // },
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
