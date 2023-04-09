import { FC, Suspense, useEffect } from "react"
import "./styles/index.scss"
import { useTheme } from "./providers/ThemeProvider"
import AppRouter from "./providers/Router/ui/AppRouter"
import { Header } from "d-widgets/Header"
import { Sidebar } from "d-widgets/Sidebar"
import { classNames as cn } from "shared/lib/classNames"
import { Column, Row } from "shared/ui"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { userActions } from "entities/User"

const App: FC = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  
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
