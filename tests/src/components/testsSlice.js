import { createSlice } from '@reduxjs/toolkit';

const testsSlice = createSlice({
  name: 'tests',
  initialState: { tests: [], countOfTrueAnswers: 0 },
  reducers: {
    testsAdd(state, action) {
      state.tests = [...action.payload];
    },
    countAdd(state, action) {
      state.countOfTrueAnswers++;
    },
    countReset(state, action) {
      state.countOfTrueAnswers = 0;
    },
  },
});

export const { testsAdd, countAdd, countReset } = testsSlice.actions;
export default testsSlice.reducer;
