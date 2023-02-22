import "./styles/index.scss"
import { classNames as cn } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { Navbar } from "widgets/Navbar"
import AppRouter from "./providers/router/ui/AppRouter"
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar"
import { Column, Row } from "shared/ui"

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn("app", {}, [theme])}>
      <Navbar />
      <Row>
        <Column>
          <Sidebar />
        </Column>
        <Column>
          <AppRouter />
        </Column>
      </Row>
    </div>
  )
}

export default App
