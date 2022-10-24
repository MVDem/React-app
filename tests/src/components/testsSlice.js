import { createSlice } from '@reduxjs/toolkit';

const testsSlice = createSlice({
  name: 'tests',
  initialState: { tests: [], countOfTrueAnswers: 0 },
  reducers: {
    testsAdd(state, action) {
      state.tests = [...action.payload];
    },
  },
});

export const { testsAdd } = testsSlice.actions;
export default testsSlice.reducer;
