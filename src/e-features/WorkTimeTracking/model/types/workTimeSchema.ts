import { WeekData } from "./weekData"

export type TSort = "up" | "down"

export interface WorkTimeSchema {
  weeks: WeekData[];
  isWorkingAllWeeks: boolean;
}