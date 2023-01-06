import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  userId: null,
  name: null,
  lastName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      for (let key in action.payload) {
        if (action.payload.hasOwnProperty(key)) {
          state[key] = action.payload[key];
        }
      }
    },

    removeUser(state) {
      state.email = null;
      state.token = null;
      state.userId = null;
      state.name = null;
      state.lastName = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
