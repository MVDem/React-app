import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './components/slices/testsSlice';
import userReducer from './components/slices/userSlice';

export default configureStore({
  reducer: {
    tests: testsReducer,
    user: userReducer,
  },
});
