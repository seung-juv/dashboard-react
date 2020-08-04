import { configureStore, createSlice } from "@reduxjs/toolkit";

const dashboard = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      state.push({ ...action.payload });
    }
  }
});

export default configureStore({ reducer: dashboard.reducer });
