import { FC, Suspense } from "react"
import "./LoginModal.scss"
import { Loader, ModalWrapper } from "shared/ui"
import { LoginFormAsync } from "../LoginForm/LoginFormAsync"
import { ModalWrapperProps } from "shared/ui/ModalWrapper/ModalWrapper"
import { useTranslation } from "react-i18next"

// up ts
type LoginModalProps = Omit<ModalWrapperProps, "title" | "children">

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { ...rest } = props
  const { t } = useTranslation()

  return (
    <ModalWrapper isLazy title={t("AUTHORIZE_TITLE")} {...rest}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </ModalWrapper>
  )
}