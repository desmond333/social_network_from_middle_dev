import { RouteProps } from "react-router-dom"
import { AppRoutes, RoutePath, TAppRoutes } from "shared/config/routeConfig/routes"
import { MainPage } from "c-pages/MainPage"
import { AboutPage } from "c-pages/AboutPage"
import { NotFoundPage } from "c-pages/NotFoundPage"
import { EfficiencyPage } from "c-pages/Efficiency"

// up ts
export const routeConfig: Record<TAppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.EFFICIENCY]: {
    path: RoutePath.efficiency,
    element: <EfficiencyPage />,
  },
}
