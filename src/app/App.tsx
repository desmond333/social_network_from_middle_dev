import { FC, Suspense } from "react"
import "./styles/index.scss"
import { classNames as cn } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import AppRouter from "./providers/router/ui/AppRouter"
import { Column, Row } from "shared/ui"
import { Navbar } from "d-widgets/Navbar"
import { Sidebar } from "d-widgets/Sidebar"

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <main className={cn("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Row>
          <Column col="auto">
            <Sidebar />
          </Column>
          <Column>
            <AppRouter />
          </Column>
        </Row>
      </Suspense>
    </main>
  )
}

export default App
