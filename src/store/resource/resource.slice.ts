import { ResourceState } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchResource } from "./resource.action";

export const initialState: ResourceState = Object.freeze({
  loading: false,
  resources: [],
  error: "",
});

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchResource.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchResource.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.resources = payload;
      state.error = "";
    });

    builder.addCase(fetchResource.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
  },
});

// actions from slice
//export const { clearAuthError, logout } = resourceSlice.actions;

// The reducer
export default resourceSlice.reducer;
