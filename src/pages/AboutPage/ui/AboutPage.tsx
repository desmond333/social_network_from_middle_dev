import { FC } from "react"
import { Column, Container, Row } from "shared/ui"
import { useTranslation } from "react-i18next"

const AboutPage: FC = () => {
  const { t, i18n } = useTranslation("about")

  return (
    <section>
      <Container>
        <Row>
          <Column>{t("ABOUT_PAGE")}</Column>
        </Row>
      </Container>
    </section>
  )
}

export default AboutPage
