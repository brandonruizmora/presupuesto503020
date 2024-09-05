import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalIncome: 0,
    budget: "50/30/20"
}

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeTotalIncome: (state, action) => {
        console.log(action.payload)
        state.totalIncome = action.payload
    }
  }
});

export const { changeTotalIncome } = configSlice.actions

export default configSlice.reducer