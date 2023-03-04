import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./LoginForm.scss"
import { Button, Input, VerticalOffset } from "shared/ui"
import { BtnVariant } from "shared/ui/Button/types"

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  return (
    <div className={cn("LoginForm", {}, [className])}>
      <VerticalOffset offset="level1">
        <Input name={"1"} type="text" />
        <Input name={"2"} type="text" />
        <Button variant={BtnVariant.FLAT}>
          {t("AUTHORIZE_BTN")}
        </Button>
      </VerticalOffset>
    </div>
  )
}