import { FC, Suspense } from "react"
import "./styles/index.scss"
import { classNames as cn } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import AppRouter from "./providers/Router/ui/AppRouter"
import { Column, Row } from "shared/ui"
import { Header } from "d-widgets/Header"
import { Sidebar } from "d-widgets/Sidebar"

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cn("app", {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <Row noGutters>
          <Column col="auto">
            <Sidebar />
          </Column>
          <Column>
            <AppRouter />
          </Column>
        </Row>
      </Suspense>
    </div>
  )
}

export default App
