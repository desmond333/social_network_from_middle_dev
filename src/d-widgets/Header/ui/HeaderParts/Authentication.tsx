import { FC, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui"
import { LoginModal } from "e-features/AuthByUsername"

interface AuthProps {
}

export const Authentication: FC<AuthProps> = () => {

  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <>
      <Button onClick={onShowModal}>{t("AUTHORIZE_BTN")}</Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </>
  )
}