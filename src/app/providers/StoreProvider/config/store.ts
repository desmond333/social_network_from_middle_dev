import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "@/f-entities/User"
import { workTimeReducer } from "@/e-features/WorkTimeTracking"
import { createReducerManager } from "./reducerManager"
import { currentLevelReducer } from "@/e-features/CurrentLevelDisplay/model/slice/currentLevelSlice"

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    workTime: workTimeReducer,
    currentLevel: currentLevelReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]