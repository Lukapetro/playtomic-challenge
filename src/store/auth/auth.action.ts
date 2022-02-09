import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData } from "../../types";
import http from "../../utils/http";
import { set } from "../../utils/storage";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginData, thunkAPI) => {
    try {
      const url = "/login";
      const { data } = await http.post(url, { email, password });
      set("token", data.token);
      return data.token;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.error);
    }
  }
);
