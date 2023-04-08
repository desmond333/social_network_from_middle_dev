import { FC, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import "./LoginForm.scss"
import { classNames as cn } from "shared/lib/classNames/classNames"
import { Button, Input, VerticalOffset } from "shared/ui"
import { BtnVariant } from "shared/ui/Button/types"
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader"
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { getLoginUsername } from "../../model/selectors/getLoginUsername"
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading"
import { getLoginPassword } from "../../model/selectors/getLoginPassword"
import { loginByUsername } from "../../model/services/LoginByUsername/LoginByUsername"
import { getLoginError } from "e-features/AuthByUsername/model/selectors/getLoginError"

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      isRemoveAfterUnmount
    >
      <div className={cn("login-form", {}, [className])}>
        <VerticalOffset offset="level1">
          {error && <div>{error}</div>}
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
          <Button
            variant={BtnVariant.FLAT}
            disabled={isLoading}
            onClick={onLoginClick}
          >
            {t("AUTHORIZE_BTN")}
          </Button>
        </VerticalOffset>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm