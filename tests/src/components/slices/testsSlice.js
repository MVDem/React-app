import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tests: [],
  testInWork: {
    testId: null,
    workUserId: null,
    timestamp: null,
    workTime: null,
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
          state[key] = action.payload[key];
        }
      }
    },

    countAdd(state, action) {
      state.testInWork.countOfTrueAnswers++;
    },
    countReset(state, action) {
      state.testInWork.countOfTrueAnswers = 0;
    },
  },
});

export const { testsAdd, setTestInWork, countAdd, countReset } =
  testsSlice.actions;
export default testsSlice.reducer;
