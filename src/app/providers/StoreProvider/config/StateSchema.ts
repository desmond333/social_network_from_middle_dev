import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router'
import { LoginSchema } from '@/e-features/AuthByUsername'
import { CurrentLevelSchema } from '@/e-features/CurrentLevelDisplay'
import { EditableProfileCardSchema } from '@/e-features/EditableProfileCard'
import { WorkTimeSchema } from '@/e-features/WorkTimeTracking'
import { UserSchema } from '@/f-entities/User'

export interface StateSchema {
    user: UserSchema
    workTime: WorkTimeSchema
    currentLevel: CurrentLevelSchema

    // Асинхронные редюсеры
    loginForm?: LoginSchema
    editableProfileCard?: EditableProfileCardSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
