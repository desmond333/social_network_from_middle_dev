import { FC } from "react"
import { Container } from "shared/ui"
import { useTranslation } from "react-i18next"
import { ErrorFallback } from "shared/ui/ErrorFallback/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"

const SkillsPage: FC = () => {
  const { t } = useTranslation("main")

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container size="fluid">
        SkillsPage
      </Container>
    </ErrorBoundary>
  )
}

export default SkillsPage
