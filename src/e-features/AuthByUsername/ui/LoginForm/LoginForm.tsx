import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import './LoginForm.scss'
import { getLoginUsername } from '../../model/selectors/getLoginUsername'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword'
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginError } from '@/e-features/AuthByUsername/model/selectors/getLoginError'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'
import { Button, Input, VerticalOffset } from '@/g-shared/ui'
import { BtnVariant } from '@/g-shared/ui/Button/types'
import { DynamicModuleLoader } from '@/g-shared/lib/components/DynamicModuleLoader'
import { ReducersList } from '@/g-shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/g-shared/lib/hooks/UseAppDispatch'

interface LoginFormProps {
  onSuccess: () => void
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { onSuccess, className } = props

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <div className={cn('login-form', {}, [className])}>
        <VerticalOffset offset="level1">
          {error && <div>{error}</div>}
          <Input
            value={username}
            name={'name'}
            type="text"
            onChange={onChangeUsername}
          />
          <Input
            value={password}
            name={'password'}
            type="text"
            onChange={onChangePassword}
          />
          <Button
            variant={BtnVariant.FLAT}
            disabled={isLoading}
            onClick={onLoginClick}
          >
            {t('AUTHORIZE_BTN')}
            <button></button>
          </Button>
        </VerticalOffset>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
