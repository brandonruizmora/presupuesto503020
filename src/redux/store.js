import { configureStore } from '@reduxjs/toolkit'
import budgetSlice from './budgetSlice'
import configSlice from './configSlice'

export const store = configureStore({
    devTools: true,
    reducer: {
        year: budgetSlice,
        config: configSlice
    },
})