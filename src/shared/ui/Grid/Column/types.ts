export type Col = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto"

export type Order = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type AlignSelf =
  | "auto"
  | "normal"
  | "center"
  | "start"
  | "end"
  | "self-start"
  | "self-end"
  | "baseline"
  | "stretch"
  | "inherit"
  | "initial"
  | "unset"

export type AlignItems = Exclude<AlignSelf, "auto">