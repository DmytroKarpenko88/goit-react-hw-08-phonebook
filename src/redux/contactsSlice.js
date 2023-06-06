import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
// isActive: false,

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },

    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.contacts.splice(index, 1);
      },
    },

    findContact: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { addContact, deleteContact, findContact } = contactSlice.actions;

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   redusers: {
//     findContact: {
//       reducer(state, action) {
//         state = action.payload;
//       },
//     },
//   },
// });
// export const { findContact } = filterSlice.actions;

export const isActiveSlice = createSlice({
  name: 'active',
  initialState: true,
  reducers: {
    toggleIsActive: {
      reducer(state) {
        return (state = !state);
      },
    },
  },
});

export const { toggleIsActive } = isActiveSlice.actions;
