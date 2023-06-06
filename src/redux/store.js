import { configureStore } from '@reduxjs/toolkit';
import { contactSlice, isActiveSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    isActive: isActiveSlice.reducer,
  },
});
