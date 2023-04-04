import { UserSchema } from "entities/User"
import { LoginSchema } from "e-features/AuthByUsername"
import { WorkTimeSchema } from "e-features/WorkTimeTracking"
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"

export interface StateSchema {
  user: UserSchema
  workTime: WorkTimeSchema

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