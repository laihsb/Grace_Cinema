import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";
import allMoviesSlice from "../features/allMovies/allMoviesSlice";
import ordersSlice from "../features/orders";


const store = configureStore({
  reducer: {
    users: usersSlice,
		movies: allMoviesSlice,
    orders: ordersSlice,
  },
});

export default store;
