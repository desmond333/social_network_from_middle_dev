import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "entities/User"
import { loginReducer } from "e-features/AuthByUsername"
import { workTimeReducer } from "e-features/WorkTimeTracking"

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    workTime: workTimeReducer,
    loginForm: loginReducer,
  }

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
