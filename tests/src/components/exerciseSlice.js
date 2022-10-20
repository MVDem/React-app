import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: { exampleLists: [], countOfTrueAnswers: 0 },
  reducers: {
    exampleAdded(state, action) {
      state.exampleLists.push({
        id: action.payload.id,
        question: action.payload.question,
        answers: action.payload.answers,
        trueanswer: action.payload.trueanswer,
      });
    },
  },
});

export const { exampleAdded } = exampleSlice.actions;
export default exampleSlice.reducer;
