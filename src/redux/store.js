import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactsSlice';
import { isActiveSlice } from './isActiveSlice';
import { filterSlice } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    isActive: isActiveSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
