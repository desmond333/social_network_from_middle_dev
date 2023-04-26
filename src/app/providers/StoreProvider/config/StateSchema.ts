import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { NavigateOptions, To } from "react-router"
import { AxiosInstance } from "axios"
import { LoginSchema } from "@/e-features/AuthByUsername"
import { WorkTimeSchema } from "@/e-features/WorkTimeTracking"
import { CurrentLevelSchema } from "@/e-features/CurrentLevelDisplay"
import { UserSchema } from "@/f-entities/User"
import { ProfileSchema } from "@/f-entities/Profile"
import { EditableProfileCardSchema } from "@/e-features/EditableProfileCard"

export interface StateSchema {
  user: UserSchema
  workTime: WorkTimeSchema
  currentLevel: CurrentLevelSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  editableProfileCard?: EditableProfileCardSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}