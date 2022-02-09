import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      // this should be with token, but this api dont support it
      const url = `/users/4`;
      const { data } = await http.get(url);
      return data.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.error);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async ({ page }: { page: Number }, thunkAPI) => {
    try {
      const url = `/users?page=${page}`;
      const { data } = await http.get(url);
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.error);
    }
  }
);
