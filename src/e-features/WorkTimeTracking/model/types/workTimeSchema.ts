type Company = "Hashbon" | "Outlines & DG" | "Self Education"

export interface WeekData {
  hours: number;
  company: Company;
  isWorking: boolean;
  date: {
    range: {
      start: Date,
      end: Date,
    };
    year: number;
  };
}

export interface WorkTimeSchema {
  weeks: WeekData[];
}