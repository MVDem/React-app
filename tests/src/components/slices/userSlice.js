import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  name: null,
  lastName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    setUserPerson(state, action) {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
    },

    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
      state.lastName = null;
    },
  },
});

export const { setUser, setUserPerson, removeUser } = userSlice.actions;

export default userSlice.reducer;
