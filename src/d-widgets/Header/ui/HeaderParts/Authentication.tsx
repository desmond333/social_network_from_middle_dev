import { FC, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui"
import { LoginModal } from "e-features/AuthByUsername"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { useSelector } from "react-redux"
import { getUserAuthData, userActions } from "entities/User"

interface AuthProps {
}

export const Authentication: FC<AuthProps> = () => {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const { t } = useTranslation()
  const isAuthData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (isAuthData) {
    return (
      <Button onClick={onLogout}>ВЫЙТИ</Button>
    )
  }

  return (
    <>
      <Button onClick={onShowModal}>{t("AUTHORIZE_BTN")}</Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </>
  )
}