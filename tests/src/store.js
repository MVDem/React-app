import { configureStore } from '@reduxjs/toolkit';
import exampleReduser from './components/exercise/exerciseSlice';
export const store = configureStore({
  reducer: {
    example: exampleReduser,
  },
});
