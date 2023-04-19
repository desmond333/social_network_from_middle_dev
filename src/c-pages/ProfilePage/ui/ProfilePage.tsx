import { FC } from "react"
import { Container } from "@/g-shared/ui"
import { useTranslation } from "react-i18next"
import { ErrorFallback } from "@/g-shared/ui/ErrorFallback/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"

const ProfilePage: FC = () => {
  const { t } = useTranslation("main")

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container size="fluid">
        ProfilePage
      </Container>
    </ErrorBoundary>
  )
}

export default ProfilePage
