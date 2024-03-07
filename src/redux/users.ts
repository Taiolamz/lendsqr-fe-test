import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import { UserDetailsState } from "./types";

export const getUserDetails = createAsyncThunk(
  "lendsqr_fe_test",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/lendsqr_fe_test");
      const data = response.data;
      if (!data) {
        toast.error("Error", {
          position: "top-right",
        });
        return thunkAPI.rejectWithValue("No data received");
      }
      thunkAPI.dispatch(setUsers(data));
      return data;
    } catch (error: any) {
      console.log(error);
      if (error.message === "Network Error") {
        toast.error(error.message, {
          position: "top-right",
        });
      }
      return thunkAPI.rejectWithValue(error.response?.data ?? "Unknown error");
    }
  }
);

const initialState: UserDetailsState = {
  loading: false,
  users: [],
};

export const dashboardUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserDetails.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getUserDetails.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setUsers } = dashboardUsersSlice.actions;

export default dashboardUsersSlice.reducer;
