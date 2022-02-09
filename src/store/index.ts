import authReducer from "./auth/auth.slice";
import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "./resource/resource.slice";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    resource: resourceReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
