import { createSlice } from '@reduxjs/toolkit'

const monthsArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const initialState = [
    {
        id: 2024,
        year: "2024",
        months: []
    }
]

const budgetSlice = createSlice({
    name: "year",
    initialState,
    reducers: {
        addNewYear: (state, action) => [
            ...state,
            action.payload
        ],
        addNewMonthToYear: (state, action) => {
            const year = state.find(y => y.id === action.payload);

            if (year) {
                const currentMonthCount = year.months.length;
                if (currentMonthCount < monthsArray.length) {
                    const nextMonth = monthsArray[currentMonthCount];
                    year.months.push({ id: currentMonthCount + 1, month: nextMonth });
                }
            }
        }
    }
});

export const { addNewYear, addNewMonthToYear } = budgetSlice.actions

export default budgetSlice.reducer