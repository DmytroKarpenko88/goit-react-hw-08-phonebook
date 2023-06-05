import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
  isActive: false,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },

    toggleActive(state, action) {
      return state => ;
    },
  },
});

export const { addContact, deleteContact, toggleActive } = contactSlice.actions;
