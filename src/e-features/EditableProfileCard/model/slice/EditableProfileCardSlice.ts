import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema'
import { fetchProfileData } from '@/e-features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData'
import { Profile } from '@/f-entities/Profile'

const initialState: EditableProfileCardSchema = {
    isLoading: false,
    readonly: true,
    data: undefined,
    error: undefined,
}

const editableProfileCardSlice = createSlice({
    name: 'editableProfileCard',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false
                    state.data = action.payload
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: editableProfileCardActions } = editableProfileCardSlice
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice
