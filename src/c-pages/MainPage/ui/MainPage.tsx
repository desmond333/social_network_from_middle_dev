import { FC } from "react"
import { Column, Container, Row } from "shared/ui"
import { useTranslation } from "react-i18next"
import { ErrorFallback } from "shared/ui/ErrorFallback/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"

const MainPage: FC = () => {
  const { t } = useTranslation("main")

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container size="fluid">
        <Row justify="center">
          <Column col={6}>{t("MAIN_PAGE")}</Column>
          <Column col={6}>{t("MAIN_PAGE")}</Column>
          <Column col={10}>{t("MAIN_PAGE")}</Column>
        </Row>
      </Container>
    </ErrorBoundary>
  )
}

export default MainPage
