import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = `https://reqres.in`;

const initialState = {
  loading: "",
  users: [],
  error: "",
};
export const fetchUsers = createAsyncThunk("users", async () => {
  const { data } = await axios.get(`${url}/api/users`);

  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload.data;
      return state;
    });
    builder.addCase(fetchUsers.pending, (state, { payload }) => {
      state.loading = true;
      state.users = [];
      return state;
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.loading = false;

      state.error = "Unabel to fetch users data ";
      return state;
    });
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
