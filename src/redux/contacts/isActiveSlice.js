import { createSlice } from '@reduxjs/toolkit';

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
