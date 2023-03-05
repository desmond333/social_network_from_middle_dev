import { FC, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./LoginForm.scss"
import { Button, Input, VerticalOffset } from "shared/ui"
import { BtnVariant } from "shared/ui/Button/types"
import { useDispatch, useSelector } from "react-redux"
import { loginActions } from "../../model/slice/loginSlice"
import { getLoginState } from "e-features/AuthByUsername/model/selectors/getLoginState"

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password } = useSelector(getLoginState)

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