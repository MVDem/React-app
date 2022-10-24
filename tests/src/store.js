import { configureStore } from '@reduxjs/toolkit';
import testsReduser from './components/testsSlice';
export default configureStore({
  reducer: {
    tests: testsReduser,
  },
});
