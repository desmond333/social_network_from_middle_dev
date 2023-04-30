import { ValueOf, ValueOfWithoutSomeKeys } from '@/g-shared/lib/types/types';

export const AppRoutes = {
    MAIN: 'main',
    PROFILE: 'profile',
    EFFICIENCY: 'efficiency',
    SKILLS: 'skills',
    ABOUT: 'about',

    // если верхние маршруты не отработали, то
    NOT_FOUND: 'not_found',
} as const;

export type TAppRoutes = ValueOf<typeof AppRoutes>
export type TAppRoutesWithoutNotFound = ValueOfWithoutSomeKeys<
  typeof AppRoutes,
  'NOT_FOUND'
>

export const RoutePath: Record<TAppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.EFFICIENCY]: '/efficiency',
    [AppRoutes.SKILLS]: '/skills',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
} as const;

export type TRoutePath = (typeof RoutePath)[keyof typeof RoutePath]
