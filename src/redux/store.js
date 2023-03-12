import { configureStore } from '@reduxjs/toolkit';

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

import { todosSlice, persistedReducer } from './todosSlice';
import { formSlice } from "./formSlice";



export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    
    addTodo: persistedReducer,
    todoDeleted: todosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)