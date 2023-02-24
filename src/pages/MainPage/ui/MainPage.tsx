import { FC } from "react"
import { Column, Container, Row } from "shared/ui"
import { useTranslation } from "react-i18next"

const MainPage: FC = () => {
  const { t, i18n } = useTranslation("main")

  return (
    <section>
      <Container>
        <Row>
          <Column>{t("MAIN_PAGE")}</Column>
        </Row>
      </Container>
    </section>
  )
}

export default MainPage
