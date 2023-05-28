import AppRouter from './providers/Router/ui/AppRouter'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'
import { FC, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '@/d-widgets/Header'
import { Sidebar } from '@/d-widgets/Sidebar'
import { userActions } from '@/f-entities/User'
import { getUserInited } from '@/f-entities/User/model/selectors/getUserInited'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { useAppDispatch } from '@/g-shared/lib/hooks/UseAppDispatch'

const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()

    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={cn('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <div className={cn('body', {}, [])}>
                    <Sidebar />
                    <div className={cn('main', {}, [])}>
                        {inited && <AppRouter />}
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default App
