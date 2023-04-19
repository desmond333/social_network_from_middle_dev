import { FC, Suspense, useEffect } from "react"
import "./styles/index.scss"
import { useTheme } from "./providers/ThemeProvider"
import AppRouter from "./providers/Router/ui/AppRouter"
import { Header } from "@/d-widgets/Header"
import { Sidebar } from "@/d-widgets/Sidebar"
import { userActions } from "@/f-entities/User"
import { Column, Row } from "@/g-shared/ui"
import { classNames as cn } from "@/g-shared/lib/classNames"
import { useAppDispatch } from "@/g-shared/lib/hooks/UseAppDispatch"

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
