import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const isLoagin = createSlice({
  name: "isLoagin",
  initialState: {
    isLogin: false
  },
  reducers: {
    login: state => void (state.isLogin = true),
    logout: state => void (state.isLogin = false)
  }
});

export const { login, logout } = isLoagin.actions;

export default configureStore({ reducer: isLoagin.reducer });
