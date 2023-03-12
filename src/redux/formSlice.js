import { createSlice } from '@reduxjs/toolkit';


export const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        number: '',
    },
    reducers: {
        nameIn(state, action) {
            state.name = action.payload;
        },
        numberPhoneIn(state, action) {
            state.number = action.payload;
        },

    },
});

export const { nameIn, numberPhoneIn, addTodo } = formSlice.actions;

export const getFormSliceName = state => state.form.name;
export const getFormSliceNumber = state => state.form.number;
