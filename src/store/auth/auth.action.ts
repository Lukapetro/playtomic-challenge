import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData } from "../../types";
import http from "../../utils/http";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginData, thunkAPI) => {
    try {
      const url = "/login";
      const {
        data: { user },
      } = await http.post(url, { email, password });
      return user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await http.post("/logout");
  } catch (err) {
    return thunkAPI.rejectWithValue("Error logout");
  }
});
