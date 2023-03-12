export interface WeekData {
  date: {
    range: {
      start: Date,
      end: Date,
    };
    year: number;
  };
  hours: number;
  isWorking: boolean;
}

export interface WorkTimeSchema {
  weeks: WeekData[];
}