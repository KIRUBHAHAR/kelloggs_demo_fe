import { createSlice } from '@reduxjs/toolkit';

const initialState = { category:'Bacterial'};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    setCategory(state,action) {
      state.category = action.payload;
    },
   
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice.reducer;