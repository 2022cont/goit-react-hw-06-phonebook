import { configureStore } from '@reduxjs/toolkit';

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

import { persistedReducer, todosSlice } from './todosSlice';

export const store = configureStore({
  reducer: {
   
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