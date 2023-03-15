import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WorkTimeSchema, TSort } from "../types/workTimeSchema"
import { WeekData } from "../types/weekData"
import { WEEKS } from "../mock"

const initialState: WorkTimeSchema = {
  weeks: WEEKS,
}

const workTimeSlice = createSlice({
  name: "workTime",
  initialState,
  reducers: {
    addWeek(state, action: PayloadAction<WeekData>) {
      state.weeks.push(action.payload)
    },
    // task: учесть минуты
    sortWeeksByHours(state, action: PayloadAction<TSort>) {
      if (action.payload === "up") {
        state.weeks.sort((a, b) => b.resultTime.hours - a.resultTime.hours)
      } else if (action.payload === "down") {
        state.weeks.sort((a, b) => a.resultTime.hours - b.resultTime.hours)
      }
    },
  },
})

export const { actions: workTimeActions } = workTimeSlice
export const { reducer: workTimeReducer } = workTimeSlice
