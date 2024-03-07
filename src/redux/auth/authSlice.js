import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokenToStore: (state, action) => {
      console.log('action in authSlice => ', action)
      // console.log('state in authSlice', state)
      state.token = action.payload.token
      state.email = action.payload.email
    }
  }
});

export const { setTokenToStore } = authSlice.actions
export default authSlice.reducer