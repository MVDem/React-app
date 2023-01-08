import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tests: [],
  testInWork: {
    testId: null,
    workUserId: null,
    startDate: null,
    endDate: null,
    countOfTrueAnswers: 0,
  },
};

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    testsAdd(state, action) {
      state.tests = [...action.payload];
    },

    setTestInWork(state, action) {
      for (let key in action.payload) {
        if (action.payload.hasOwnProperty(key)) {
          state.testInWork[key] = action.payload[key];
        }
      }
    },

    countAdd(state, action) {
      state.testInWork.countOfTrueAnswers++;
    },

    testReset(state, action) {
      state.testInWork.testId = null;
      state.testInWork.startDate = null;
      state.testInWork.endDate = null;
      state.testInWork.countOfTrueAnswers = 0;
    },
  },
});

export const { testsAdd, setTestInWork, setEndDate, countAdd, testReset } =
  testsSlice.actions;
export default testsSlice.reducer;
