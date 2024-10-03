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
                    year.months.push({ id: currentMonthCount + 1, month: nextMonth, needs: [], wants: [], savings: [] });
                }
            }
        },
        addNewExpenseNeeds: (state, action) => {
            const { idYear, idMonth, expense } = action.payload;
            const year = state.find(y => y.id === idYear);  // Encuentra el año
            const month = year.months.find(m => m.id === idMonth);  // Encuentra el mes
            const idExpense = month.needs.length; // Encuentra cuantos elementos hay
            state.find(y => y.id === idYear).months.find(m => m.id === idMonth).needs.push({ id: idExpense, ...expense });
        },
        addNewExpenseWants: (state, action) => {
            const { idYear, idMonth, expense } = action.payload;
            const year = state.find(y => y.id === idYear);  // Encuentra el año
            const month = year.months.find(m => m.id === idMonth);  // Encuentra el mes
            const idExpense = month.wants.length; // Encuentra cuantos elementos hay
            state.find(y => y.id === idYear).months.find(m => m.id === idMonth).wants.push({ id: idExpense, ...expense });
        },
        deleteExpenseNeeds: (state, action) => {
            const { idYear, idMonth, idExpense } = action.payload;

            const year = state.find(y => y.id === idYear);  // Encuentra el año
            const month = year.months.find(m => m.id === idMonth);  // Encuentra el mes

            // Encuentra el índice del elemento que quieres eliminar
            const index = month.needs.findIndex(need => need.id === idExpense);

            // Si se encontró el índice (no es -1), elimina el elemento
            if (index !== -1) {
                month.needs.splice(index, 1);  // Elimina 1 elemento en la posición `index`
            }
        },
        deleteExpenseWants: (state, action) => {
            const { idYear, idMonth, idExpense } = action.payload;

            const year = state.find(y => y.id === idYear);  // Encuentra el año
            const month = year.months.find(m => m.id === idMonth);  // Encuentra el mes

            // Encuentra el índice del elemento que quieres eliminar
            const index = month.wants.findIndex(want => want.id === idExpense);

            // Si se encontró el índice (no es -1), elimina el elemento
            if (index !== -1) {
                month.wants.splice(index, 1);  // Elimina 1 elemento en la posición `index`
            }
        },
        editExpenseNeeds: (state, action) => {
            const { idYear, idMonth, expense } = action.payload;

            const year = state.find(y => y.id === idYear);  // Encuentra el año
            const month = year.months.find(m => m.id === idMonth);  // Encuentra el mes

            // Encuentra el índice del elemento que se quiere modificar
            const index = month.needs.findIndex(need => need.id === expense.id);

            // Si se encontró el índice (no es -1), edita el elemento
            if (index !== -1) {
                // Modificar directamente las propiedades del objeto
                month.needs[index].expense = expense.expense;
                month.needs[index].description = expense.description;
                month.needs[index].total = expense.total;
            }
        },
    }
});

export const { addNewYear, addNewMonthToYear, addNewExpenseNeeds, addNewExpenseWants, deleteExpenseNeeds, deleteExpenseWants, editExpenseNeeds } = budgetSlice.actions

export default budgetSlice.reducer