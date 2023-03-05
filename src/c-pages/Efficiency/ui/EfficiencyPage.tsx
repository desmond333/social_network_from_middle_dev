import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import { ErrorFallback } from "shared/ui"
import { ErrorBoundary } from "react-error-boundary"

interface EfficiencyPageProps {
  className?: string;
}

const EfficiencyPage: FC<EfficiencyPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className={cn("efficiency", {}, [className])}>
        EfficiencyPage
      </div>
    </ErrorBoundary>
  )
}