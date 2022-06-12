import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Reducers/usersSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
