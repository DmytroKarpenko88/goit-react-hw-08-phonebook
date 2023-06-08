import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  // initialState: {
  //   filter: '',
  // },
  initialState: '',
  reducers: {
    findContact: {
      reducer(state, action) {
        // state.filter = action.payload;
        return state = action.payload;
      },
    },
  },
});

export const { findContact } = filterSlice.actions;
