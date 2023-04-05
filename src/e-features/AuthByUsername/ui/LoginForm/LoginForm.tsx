import { FC, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./LoginForm.scss"
import { Button, Input, VerticalOffset } from "shared/ui"
import { BtnVariant } from "shared/ui/Button/types"
import { useDispatch, useSelector } from "react-redux"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { getLoginUsername } from "../../model/selectors/getLoginUsername"
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading"
import { getLoginPassword } from "../../model/selectors/getLoginPassword"
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader"
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      isRemoveAfterUnmount
    >
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
          <Button variant={BtnVariant.FLAT} disabled={isLoading}>
            {t("AUTHORIZE_BTN")}
          </Button>
        </VerticalOffset>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm