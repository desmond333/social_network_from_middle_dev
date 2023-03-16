import { WeekData } from "./types/weekData"

export const WEEKS: WeekData[] = [
  {
    company: "Hashbon",
    isWorking: true,
    resultTime: {
      hours: 35,
      minutes: 42,
    },
    date: {
      year: 2022,
      range: {
        start: new Date("2022-05-23"),
        end: new Date("2022-05-29"),
      },
    },
  },
  {
    company: "Hashbon",
    isWorking: true,
    resultTime: {
      hours: 35,
      minutes: 0,
    },
    date: {
      year: 2022,
      range: {
        start: new Date("2022-05-30"),
        end: new Date("2022-06-05"),
      },
    },
  },
  {
    company: "Self Education",
    isWorking: true,
    resultTime: {
      hours: 32,
      minutes: 0,
    },
    date: {
      year: 2023,
      range: {
        start: new Date("2023-02-28"),
        end: new Date("2023-03-05"),
      },
    },
  },
  {
    company: "Hashbon",
    isWorking: true,
    resultTime: {
      hours: 31,
      minutes: 0,
    },
    date: {
      year: 2022,
      range: {
        start: new Date("2022-06-06"),
        end: new Date("2022-06-12"),
      },
    },
  },
  {
    company: "Outlines & DG",
    isWorking: false,
    resultTime: {
      hours: 0,
      minutes: 0,
    },
    date: {
      year: 2022,
      range: {
        start: new Date("2022-01-01"),
        end: new Date("2022-01-07"),
      },
    },
  },
]