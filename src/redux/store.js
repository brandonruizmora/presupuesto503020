import { configureStore } from '@reduxjs/toolkit'
import budgetSlice from './budgetSlice'
import configSlice from './configSlice'

// Guardar en localStorage
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (e) {
        console.warn('Error guardando el estado en localStorage', e);
    }
};

// Cargar desde localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined; // Devuelve undefined si no hay nada en localStorage
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn('Error cargando el estado desde localStorage', e);
        return undefined;
    }
};

const preloadedState = loadFromLocalStorage(); // Cargar el estado almacenado en localStorage


export const store = configureStore({
    devTools: true,
    reducer: {
        year: budgetSlice,
        config: configSlice
    },
    preloadedState, // Utiliza el estado precargado
})

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});