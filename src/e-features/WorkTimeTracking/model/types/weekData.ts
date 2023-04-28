export type Company =
  | 'SimbirSoft'
  | 'Hashbon'
  | 'Outlines & DG'
  | 'Self Education'

export type MyBackState = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface ResultTime {
  hours: number
  minutes: number
}

export interface Range {
  start: Date
  end: Date
}

export interface WeekData {
  company: Company
  isWorkingWeek: boolean
  isSeek: boolean
  myBackState: MyBackState
  resultTime: ResultTime
  date: Range
}
