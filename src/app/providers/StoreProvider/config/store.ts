import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { workTimeReducer } from '@/e-features/WorkTimeTracking';
import { currentLevelReducer } from '@/e-features/CurrentLevelDisplay/model/slice/currentLevelSlice';
import { userReducer } from '@/f-entities/User';
import { $api } from '@/g-shared/api/api';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        workTime: workTimeReducer,
        currentLevel: currentLevelReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
    // @ts-ignore
        reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
