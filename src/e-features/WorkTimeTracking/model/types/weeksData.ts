import { WeekData } from "./workTimeSchema"

export const WEEKS: WeekData[] = [
  {
    date: {
      year: 2022,
      range: { start: new Date("2022-03-06"), end: new Date("2022-03-12") },
    },
    hours: 30,
    isWorking: true,
  },
  {
    date: {
      year: 2022,
      range: { start: new Date("2022-03-13"), end: new Date("2022-03-19") },
    },
    hours: 25,
    isWorking: true,
  },
  {
    date: {
      year: 2022,
      range: { start: new Date("2022-03-20"), end: new Date("2022-03-26") },
    },
    hours: 35,
    isWorking: true,
  },
  {
    date: {
      year: 2022,
      range: { start: new Date("2022-03-27"), end: new Date("2022-04-02") },
    },
    hours: 28,
    isWorking: true,
  },
  {
    date: {
      year: 2022,
      range: { start: new Date("2022-04-03"), end: new Date("2022-04-09") },
    },
    hours: 32,
    isWorking: true,
  },
]