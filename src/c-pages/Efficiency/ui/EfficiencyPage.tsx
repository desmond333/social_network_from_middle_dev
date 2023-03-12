import { useTranslation } from "react-i18next"
import { Column, Container, ErrorFallback, Row } from "shared/ui"
import { ErrorBoundary } from "react-error-boundary"
import { WeekDataList } from "e-features/WorkTimeTracking"

const EfficiencyPage = () => {
  const { t } = useTranslation("efficiency")

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container size="fluid">
        <Row justify="center">
          <Column col={10}>{t("EFFICIENCY_PAGE_TITLE")}</Column>
          <Column col={10}>
            <WeekDataList />
          </Column>
        </Row>
      </Container>
    </ErrorBoundary>
  )
}

export default EfficiencyPage
