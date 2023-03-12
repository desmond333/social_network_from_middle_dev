import { lazy } from "react"

export const EfficiencyPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import("./EfficiencyPage")), 1500)
}))