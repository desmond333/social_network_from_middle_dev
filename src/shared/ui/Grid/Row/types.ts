import { Align } from "shared/ui/types"

export type RowAlign = Exclude<Align, "baseline"
  | "end"
  | "initial"
  | "inherit"
  | "normal"
  | "revert"
  | "self-end"
  | "self-start"
  | "start"
  | "unset">

export type RowGap =
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5"
  | "level6"
  | "level7"
  | "level8"
  | "level9"
  | "level10"
  | "constancy-level1"
  | "constancy-level2"
  | "constancy-level3"
  | "constancy-level4"
  | "constancy-level5"

// up ts
export type ColumnGap = Exclude<RowGap, "level6" | "level7" | "level8" | "level9" | "level10">