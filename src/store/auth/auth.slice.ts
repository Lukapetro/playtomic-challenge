import { AuthState } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.action";
import { clear } from "../../utils/storage";

export const initialState: AuthState = Object.freeze({
  isAuthenticated: false,
  error: "",
  loading: false,
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = "";
    },
    logout: (state) => {
      clear();
      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.loading = false;
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.error = payload as string;
      state.isAuthenticated = false;
      state.loading = false;
    });
  },
});

// actions from slice
export const { clearAuthError, logout } = authSlice.actions;

// The reducer
export default authSlice.reducer;
