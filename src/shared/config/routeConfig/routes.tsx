export const AppRoutes = {
  MAIN: "main",
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
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
}