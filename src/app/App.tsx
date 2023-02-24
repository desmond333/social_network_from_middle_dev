import { FC, Suspense } from "react"
import "./styles/index.scss"
import { classNames as cn } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { Navbar } from "widgets/Navbar"
import AppRouter from "./providers/router/ui/AppRouter"
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar"
import { Column, Row } from "shared/ui"

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
          <Column col="auto">
            <AppRouter />
          </Column>
        </Row>
      </Suspense>
    </main>
  )
}

export default App
