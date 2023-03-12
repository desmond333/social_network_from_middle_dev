import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WorkTimeSchema, WeekData } from "../types/workTimeSchema"
import { WEEKS } from "../types/weeksData"

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
    sortWeeksByHours(state) {
      state.weeks.sort((a, b) => b.hours - a.hours)
    },
  },
})

export const { actions: workTimeActions } = workTimeSlice
export const { reducer: workTimeReducer } = workTimeSlice
