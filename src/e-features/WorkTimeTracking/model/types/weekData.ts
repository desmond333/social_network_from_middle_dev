export type Company = "Hashbon" | "Outlines & DG" | "Self Education"

export interface ResultTime {
  hours: number,
  minutes: number,
}

export interface MyDate {
  range: {
    start: Date,
    end: Date,
  };
  year: number;
}

export interface WeekData {
  company: Company;
  isWorking: boolean;
  resultTime: ResultTime,
  date: MyDate
}