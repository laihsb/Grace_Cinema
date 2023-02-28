import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";
const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
