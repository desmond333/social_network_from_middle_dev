import { FC } from "react"
import "./LoginModal.scss"
import { ModalWrapper } from "shared/ui"
import { LoginForm } from "../LoginForm/LoginForm"
import { ModalWrapperProps } from "shared/ui/ModalWrapper/ModalWrapper"
import { useTranslation } from "react-i18next"

// up ts
type LoginModalProps = Omit<ModalWrapperProps, "title" | "children">

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { ...rest } = props
  const { t } = useTranslation()

  return (
    <ModalWrapper isLazy title={t("AUTHORIZE_TITLE")} {...rest}>
      <LoginForm />
    </ModalWrapper>
  )
}