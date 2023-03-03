import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";
import allMoviesSlice from "../features/allMovies/allMoviesSlice";
import ordersSlice from "../features/orders";
import allPersonnelSlice from "../features/allPersonnelSlice";
import cartReducer, { getTotals } from "../features/cartSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    movies: allMoviesSlice,
    orders: ordersSlice,
    personnel: allPersonnelSlice,
    cart: cartReducer,
  },
});
// First dispatch when the application loads
store.dispatch(getTotals());
export default store;
