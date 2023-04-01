export type Company = "SimbirSoft" | "Hashbon" | "Outlines & DG" | "Self Education"

export interface ResultTime {
  hours: number,
  minutes: number,
}

export interface Range {
  start: Date,
  end: Date,
}

export interface WeekData {
  company: Company;
  isWorking: boolean;
  resultTime: ResultTime,
  date: Range
}