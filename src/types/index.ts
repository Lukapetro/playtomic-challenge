import { Action, ThunkAction } from "@reduxjs/toolkit";

import { store } from "../store";

// Form Data

export interface LoginData {
  email: string;
  password: string;
}

// User

export interface User {
  id: Number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// Resource

export interface Resource {
  id: Number;
  color: string;
  name: string;
  pantone_value: string;
  year: Number;
}

// Nft

export interface Nft {
  id: Number;
  name: string;
  price: string;
  image: string;
}

// State

export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

export interface ResourceState {
  loading: boolean;
  resources: [];
  error: string | null;
}

export interface UserState {
  loading: boolean;
  users?: [];
  me: User;
  error: string | null;
}

// Redux Utilities

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
