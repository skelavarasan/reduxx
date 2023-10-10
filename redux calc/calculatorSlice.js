import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: { result: 0 },
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    },
  },
});

export const { add, subtract, multiply, divide } = calculatorSlice.actions;
export default calculatorSlice.reducer;
