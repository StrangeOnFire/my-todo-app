import { createSlice } from '@reduxjs/toolkit';

// Helper functions for local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (err) {
        return [];
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasks', serializedState);
    } catch (err) {
        // Ignore write errors
    }
};

const initialState = loadState();

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            saveState(state);
        },
        deleteTask: (state, action) => {
            const newState = state.filter((_, index) => index !== action.payload);
            saveState(newState);
            return newState;
        },
        editTask: (state, action) => {
            const { index, newTask } = action.payload;
            state[index] = newTask;
            saveState(state);
        }
    },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
