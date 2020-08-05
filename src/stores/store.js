import { configureStore, createSlice } from "@reduxjs/toolkit";

const dashboard = createSlice({
  name: "dashboard",
  initialState: {
    isLogin: false,
    user: {
      me: {
        name: "Seung Ju",
        email: "kingsky32@gmail.com",
        bio: "Helllllo",
        avatar:
          "https://phinf.pstatic.net/contact/20200802_291/1596376539993fFl4q_PNG/avatar_profile.png?type=f130_130"
      }
    },
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
