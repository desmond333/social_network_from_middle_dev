import { FC } from "react"
import "./ErrorFallback.scss"
import { Button, Column, Container } from "@/g-shared/ui"
import { useTranslation } from "react-i18next"
import { Space } from "../Grid/Space/Space"

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

export const ErrorFallback: FC<ErrorFallbackProps> = (props) => {
  const { error, resetErrorBoundary } = props
  const { t } = useTranslation()
  console.log(error.message)

  return (
    <Container size="fluid">
      <Space rowGap="level3" align="center" direction="column" flex>
        <Column col={6}>
          <p>{t("ERROR_BLOCK_TITLE")}</p>
        </Column>
        <Column col={6}>
          <Button onClick={resetErrorBoundary}>{t("ERROR_BLOCK_BTN")}</Button>
        </Column>
      </Space>
    </Container>

  )
}