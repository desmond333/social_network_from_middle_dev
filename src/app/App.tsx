import { FC, Suspense } from "react"
import "./styles/index.scss"
import { classNames as cn } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import AppRouter from "./providers/router/ui/AppRouter"
import { Column, Container, Row } from "shared/ui"
import { Header } from "d-widgets/Header"
import { Sidebar } from "d-widgets/Sidebar"

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cn("app", {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <Container size="fluid">
          <Row>
            <Column col="auto">
              <Sidebar />
            </Column>
            <Column>
              <AppRouter />
            </Column>
          </Row>
        </Container>
      </Suspense>
    </div>
  )
}

export default App
