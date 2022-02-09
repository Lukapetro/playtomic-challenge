import { UserState } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchCurrentUser } from "./user.action";

export const initialState: UserState = {
  loading: false,
  me: {
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  },
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.me = payload;
    });

    builder.addCase(fetchCurrentUser.rejected, (state, { payload }) => {
      state.error = payload as string;
      state.loading = false;
    });

    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    });

    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.error = payload as string;
      state.loading = false;
    });
  },
});

// actions from slice
//export const { clearAuthError, logout } = userSlice.actions;

// The reducer
export default userSlice.reducer;
