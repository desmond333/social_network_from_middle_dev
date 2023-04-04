import { FC, memo, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./LoginForm.scss"
import { Button, Input, VerticalOffset } from "shared/ui"
import { BtnVariant } from "shared/ui/Button/types"
import { useDispatch, useSelector, useStore } from "react-redux"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema"
import { getLoginUsername } from "../../model/selectors/getLoginUsername"
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading"
import { getLoginPassword } from "../../model/selectors/getLoginPassword"

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const store = useStore() as ReduxStoreWithManager
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)

  // для добавления и удаления асинхронного редюсера в store
  useEffect(() => {
    store.reducerManager.add("loginForm", loginReducer)

    return () => {
      store.reducerManager.remove("loginForm")
    }
  }, [])


  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  return (
    <div className={cn("login-form", {}, [className])}>
      <VerticalOffset offset="level1">
        <Input
          value={username}
          name={"name"}
          type="text"
          onChange={onChangeUsername}
        />
        <Input
          value={password}
          name={"password"}
          type="text"
          onChange={onChangePassword}
        />
        <Button variant={BtnVariant.FLAT}>
          {t("AUTHORIZE_BTN")}
        </Button>
      </VerticalOffset>
    </div>
  )
})

export default LoginForm