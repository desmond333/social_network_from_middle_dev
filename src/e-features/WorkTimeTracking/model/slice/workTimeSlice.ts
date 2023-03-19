import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WorkTimeSchema, TSort } from "../types/workTimeSchema"
import { WeekData } from "../types/weekData"
import { WEEKS } from "../mock"

const initialState: WorkTimeSchema = {
  weeks: WEEKS,
  isWorkingAllWeeks: false,
}

const workTimeSlice = createSlice({
  name: "workTime",
  initialState,
  reducers: {
    addWeek(state, action: PayloadAction<WeekData>) {
      state.weeks.push(action.payload)
    },
    sortWeeksByHours(state, action: PayloadAction<TSort>) {
      if (action.payload === "up") {
        state.weeks.sort((a, b) => {
          if (b.resultTime.hours === a.resultTime.hours) {
            return b.resultTime.minutes - a.resultTime.minutes
          } else {
            return b.resultTime.hours - a.resultTime.hours
          }
        })
      } else if (action.payload === "down") {
        state.weeks.sort((a, b) => {
          if (a.resultTime.hours === b.resultTime.hours) {
            return a.resultTime.minutes - b.resultTime.minutes
          } else {
            return a.resultTime.hours - b.resultTime.hours
          }
        })
      }
    },
    sortWeeksByDate(state, action: PayloadAction<TSort>) {
      if (action.payload === "up") {
        state.weeks.sort((a, b) => a.date.end.getTime() - b.date.end.getTime(),
        )
      } else if (action.payload === "down") {
        state.weeks.sort((a, b) => b.date.end.getTime() - a.date.end.getTime(),
        )
      }
    },
    filterByIsWorking(state) {
      state.weeks = state.weeks.filter((week) => week.isWorking)
      state.isWorkingAllWeeks = true
    },
  },
})

export const { actions: workTimeActions } = workTimeSlice
export const { reducer: workTimeReducer } = workTimeSlice
