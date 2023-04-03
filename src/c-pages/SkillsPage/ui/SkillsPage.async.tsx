import { lazy } from "react"

export const SkillsPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import("./SkillsPage")), 1500)
}))
