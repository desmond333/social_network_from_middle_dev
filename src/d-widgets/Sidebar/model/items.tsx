import {
    AppRoutes,
    RoutePath,
    TAppRoutesWithoutNotFound,
    TRoutePath,
} from '@/g-shared/config/routeConfig/routes'
import { IconHome } from '@/g-shared/ui/Icon/Icons'

export interface ISidebarItem {
    path: TRoutePath
    text: TAppRoutesWithoutNotFound
    icon: JSX.Element
    // icon: VFC<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: AppRoutes.MAIN,
        icon: <IconHome />,
    },
    {
        path: RoutePath.profile,
        text: AppRoutes.PROFILE,
        icon: <IconHome />,
    },
    {
        path: RoutePath.efficiency,
        text: AppRoutes.EFFICIENCY,
        icon: <IconHome />,
    },
    {
        path: RoutePath.skills,
        text: AppRoutes.SKILLS,
        icon: <IconHome />,
    },
    {
        path: RoutePath.about,
        text: AppRoutes.ABOUT,
        icon: <IconHome />,
    },
    {
        path: RoutePath.articles,
        text: AppRoutes.ARTICLES,
        icon: <IconHome />,
    },
]
