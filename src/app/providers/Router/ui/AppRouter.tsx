import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '@/app/providers/Router/routeConfig/routeConfig'
import { PageLoader } from '@/d-widgets/PageLoader/PageLoader'

const routes = Object.values(routeConfig)

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
