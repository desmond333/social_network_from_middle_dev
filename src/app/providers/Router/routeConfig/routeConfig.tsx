import { RouteProps } from 'react-router-dom'
import { MainPage } from '@/c-pages/MainPage'
import { ProfilePage } from '@/c-pages/ProfilePage'
import { EfficiencyPage } from '@/c-pages/Efficiency'
import { SkillsPage } from '@/c-pages/SkillsPage'
import { AboutPage } from '@/c-pages/AboutPage'
import { NotFoundPage } from '@/c-pages/NotFoundPage'
import {
  AppRoutes,
  RoutePath,
  TAppRoutes,
} from '@/g-shared/config/routeConfig/routes'

// up ts
export const routeConfig: Record<TAppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.EFFICIENCY]: {
    path: RoutePath.efficiency,
    element: <EfficiencyPage />,
  },
  [AppRoutes.SKILLS]: {
    path: RoutePath.skills,
    element: <SkillsPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
