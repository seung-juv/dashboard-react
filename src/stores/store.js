import { configureStore, createSlice } from "@reduxjs/toolkit";

const dashboard = createSlice({
  name: "dashboard",
  initialState: {
    isLogin: false,
    chart: []
  },
  reducers: {
    login: state => void (state.isLogin = true),
    logout: state => void (state.isLogin = false),
    addChart: (state, action) => {
      state.chart.push(action.payload);
    }
  }
});

export const { login, logout, addChart } = dashboard.actions;

export default configureStore({ reducer: dashboard.reducer });
