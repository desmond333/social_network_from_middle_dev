import { FC, ReactNode, useEffect } from "react"
import { ReduxStoreWithManager, StateSchemaKey } from "@/app/providers/StoreProvider/config/StateSchema"
import { Reducer } from "@reduxjs/toolkit"
import { useDispatch, useStore } from "react-redux"

// up ts
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

// up ts кортеж
type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  isRemoveAfterUnmount?: boolean;
}

// HOC для добавления и удаления асинхронных reducers в store
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    isRemoveAfterUnmount = false,
  } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    // для добавления асинхронных reducers в store
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      // для удаления асинхронных reducers в store
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}