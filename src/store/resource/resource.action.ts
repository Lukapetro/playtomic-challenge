import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http";

export const fetchResource = createAsyncThunk(
  "auth/login",
  async (_, thunkAPI) => {
    try {
      const url = "/unknown";
      const { data } = await http.get(url);
      return data.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.error);
    }
  }
);
