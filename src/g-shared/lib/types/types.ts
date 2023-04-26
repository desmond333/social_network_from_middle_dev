// up ts custom types
export type ValueOf<T> = T[keyof T]
//для export type TAppRoutes = typeof AppRoutes[keyof typeof AppRoutes]

export type ValueOfWithoutSomeKeys<T, K extends keyof T> = T[keyof Omit<T, K>]
//для export type TAppRoutesWithoutNotFound = typeof AppRoutes[keyof Omit<typeof AppRoutes, "NOT_FOUND">]
