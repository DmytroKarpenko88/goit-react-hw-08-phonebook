import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});
