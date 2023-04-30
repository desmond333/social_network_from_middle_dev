import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkTimeSchema } from '../types/workTimeSchema';
import { WeekData } from '../types/weekData';
import { WEEKS } from '../mock';

const initialState: WorkTimeSchema = {
    weeks: WEEKS,
    isWorkingAllWeeks: false,
};

const skillsSlice = createSlice({
    name: 'workTime',
    initialState,
    reducers: {
        addWeek(state, action: PayloadAction<WeekData>) {
            state.weeks.push(action.payload);
        },
    },
});

export const { actions: skillsActions } = skillsSlice;
export const { reducer: skillsReducer } = skillsSlice;
