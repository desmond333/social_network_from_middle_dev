import { FC } from "react"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./NotFoundPage.scss"
import { useTranslation } from "react-i18next"

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={cn("NotFoundPage", {}, [className])}>
      {t("NOT_FOUND")}
    </div>
  )
}