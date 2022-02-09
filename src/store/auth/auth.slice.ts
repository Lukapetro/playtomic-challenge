import { AuthState } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./auth.action";

export const initialState: AuthState = Object.freeze({
  isAuthenticated: false,
  error: "",
  loading: false,
  user: {},
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = payload;
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.error = payload as string;
      state.isAuthenticated = false;
      state.loading = false;
    });

    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = {};
    });

    builder.addCase(logout.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = {};
    });
  },
});

// actions from slice
export const { clearAuthError } = authSlice.actions;

// The reducer
export default authSlice.reducer;
