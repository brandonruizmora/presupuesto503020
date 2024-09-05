import { configureStore } from '@reduxjs/toolkit'
import budgetSlice from './budgetSlice'

export const store = configureStore({
    devTools: true,
    reducer: {
        year: budgetSlice
    },
})