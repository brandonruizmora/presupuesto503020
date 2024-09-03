import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 2024,
        year: "2024"
    }
]

const budgetSlice = createSlice({
    name: "year",
    initialState,
    reducers: {
        addNewYear: (state, action) => [
            ...state,
            action.payload
        ]
    }
});

export const { addNewYear } = budgetSlice.actions

export default budgetSlice.reducer