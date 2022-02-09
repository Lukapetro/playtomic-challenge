import { Action, ThunkAction } from "@reduxjs/toolkit";

import { store } from "../store";

// Form Data

export interface LoginData {
  email: string;
  password: string;
}

// User

export interface User {
  id?: string;
  name?: string;
  email?: string;
}

// State

export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  error: string;
  user?: User;
}

export interface ErrorState {
  message: string | null;
}

// Redux Utilities

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
