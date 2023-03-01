import { FC } from "react"
import { Container } from "shared/ui"
import { useTranslation } from "react-i18next"
import { ErrorFallback } from "shared/ui/ErrorFallback/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"
import { BugButton } from "shared/ui/BugButton/BugButton"

const AboutPage: FC = () => {
  const { t } = useTranslation("about")

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container size="lg">
        {t("ABOUT_PAGE")}
        <BugButton />
      </Container>
    </ErrorBoundary>
  )
}

export default AboutPage
