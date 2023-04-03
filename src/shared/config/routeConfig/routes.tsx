export const AppRoutes = {
  MAIN: "main",
  PROFILE: "profile",
  EFFICIENCY: "efficiency",
  SKILLS: "skills",
  ABOUT: "about",

  // если верхние маршруты не отработали, то
  NOT_FOUND: "not_found",
} as const

export type TAppRoutes = typeof AppRoutes[keyof typeof AppRoutes]

// up ts
export type ValueOf<T> = T[keyof T]
export type TAppRoutes2 = ValueOf<typeof AppRoutes>

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.EFFICIENCY]: "/efficiency",
  [AppRoutes.SKILLS]: "/skills",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
}