import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";
import allMoviesSlice from "../features/allMovies/allMoviesSlice";
import ordersSlice from "../features/orders";
import allPersonnelSlice from "../features/allPersonnelSlice";
import singleMovieSlice from "../features/singleMovieSlice";
import specificUserSlice from "../features/specificUserSlice";


const store = configureStore({
  reducer: {
    users: usersSlice,
    user: specificUserSlice,
		movies: allMoviesSlice,
    singleMovie: singleMovieSlice,
    orders: ordersSlice,
		personnel: allPersonnelSlice,
  },
});

export default store;
