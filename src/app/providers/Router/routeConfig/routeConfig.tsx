import { RouteProps } from 'react-router-dom'
import { AboutPage } from '@/c-pages/AboutPage'
import { ArticleDetailsPage } from '@/c-pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage'
import { ArticlesPage } from '@/c-pages/ArticlesPage/ui/ArticlesPage/ArticlesPage'
import { EfficiencyPage } from '@/c-pages/Efficiency'
import { MainPage } from '@/c-pages/MainPage'
import { NotFoundPage } from '@/c-pages/NotFoundPage'
import { ProfilePage } from '@/c-pages/ProfilePage'
import { SkillsPage } from '@/c-pages/SkillsPage'
import {
    AppRoutes,
    RoutePath,
    TAppRoutes,
} from '@/g-shared/config/routeConfig/routes'

type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

// up ts
export const routeConfig: Record<TAppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.EFFICIENCY]: {
        path: RoutePath.efficiency,
        element: <EfficiencyPage />,
        authOnly: true,
    },
    [AppRoutes.SKILLS]: {
        path: RoutePath.skills,
        element: <SkillsPage />,
        authOnly: true,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
        authOnly: false,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: RoutePath.article_details,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
        authOnly: false,
    },
}
