export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

const TEXT = {
  FIRST: "some text",
  SECOND: "other text",
  THIRD: "some some text",
} as const;

export type ValueOf<T> = T[keyof T]

export type TextType1 = typeof TEXT[keyof typeof TEXT]
export type TextType2 = ValueOf<typeof TEXT>

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};