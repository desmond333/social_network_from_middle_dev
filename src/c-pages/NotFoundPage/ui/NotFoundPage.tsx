import { FC } from "react"
import { classNames as cn } from "@/g-shared/lib/classNames/classNames"
import "./NotFoundPage.scss"
import { useTranslation } from "react-i18next"
import { ErrorFallback } from "@/g-shared/ui/ErrorFallback/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className={cn("NotFoundPage", {}, [className])}>
        {t("NOT_FOUND")}
      </div>
    </ErrorBoundary>
  )
}