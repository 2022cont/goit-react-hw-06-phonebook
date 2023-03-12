import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const todosSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
  },

  reducers: {
    addTodo(state, action) {
      state.contacts.push(action.payload)
    },

    todoDeleted(state, action) {
      state.contacts.filter(todo => todo.id !== action.payload);

    }
  },
});

const persistConfig = {
  key: 'root',
  storage,
};


export const persistedReducer = persistReducer(persistConfig, todosSlice.reducer);

export const { addTodo, todoDeleted } = todosSlice.actions;

export const getTodosSlice = state => state.addTodo.contacts;

