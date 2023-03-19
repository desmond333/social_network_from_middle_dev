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
      start: new Date("2022-05-23"),
      end: new Date("2022-05-29"),
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
      start: new Date("2022-05-30"),
      end: new Date("2022-06-05"),
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
      start: new Date("2023-02-28"),
      end: new Date("2023-03-05"),
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
      start: new Date("2022-06-06"),
      end: new Date("2022-06-12"),
    },
  },
  {
    company: "Self Education",
    isWorking: true,
    resultTime: {
      hours: 20,
      minutes: 0,
    },
    date: {
      start: new Date("2020-06-03"),
      end: new Date("2020-06-09"),
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
      start: new Date("2022-01-01"),
      end: new Date("2022-01-07"),
    },
  },
]