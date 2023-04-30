import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';

const initialState: EditableProfileCardSchema = {
    readonly: true,
};

const editableProfileCardSlice = createSlice({
    name: 'editableProfileCard',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
    },
});

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
