import { Direction } from "shared/ui/types"

export type MenuDirection = Exclude<Direction, "row-reverse" | "column-reverse">