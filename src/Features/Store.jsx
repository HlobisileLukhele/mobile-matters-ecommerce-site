import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'root', // Unique identifier for persisted state
  storage, // Use the default storage
  whitelist: ['ADD_TO_CART', 'REMOVE_FROM_CART'], // Persist only these actions
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
