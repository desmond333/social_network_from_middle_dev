import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { UserSchema } from "@/f-entities/User"
import { LoginSchema } from "@/e-features/AuthByUsername"
import { WorkTimeSchema } from "@/e-features/WorkTimeTracking"
import { CurrentLevelSchema } from "@/e-features/CurrentLevelDisplay"

export interface StateSchema {
  user: UserSchema
  workTime: WorkTimeSchema
  currentLevel: CurrentLevelSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
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