import { createSlice } from '@reduxjs/toolkit'
import { CurrentLevelSchema } from '../types/currentLevelSchema'

const initialState: CurrentLevelSchema = {
  initialDate: new Date('2020-06-03'),
  level: 0,
}

const currentLevelSlice = createSlice({
  name: 'currentLevel',
  initialState,
  reducers: {
    transformDateInLevel(state) {
      const start = state.initialDate
      const end = new Date()
      const years = end.getFullYear() - start.getFullYear()
      const months = years * 12 + (end.getMonth() - start.getMonth())
      state.level = months
    },
  },
})

export const { actions: currentLevelActions } = currentLevelSlice
export const { reducer: currentLevelReducer } = currentLevelSlice
