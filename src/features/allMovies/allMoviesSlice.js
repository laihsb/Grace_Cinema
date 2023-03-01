import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchMoviesAsync = createAsyncThunk("movies", async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/movies`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// export const addMovieAsync = createAsyncThunk("addMovie", async (movie) => {
//     const { data } = await axios.post(`/api/movies`, movie);
//     return data
// });

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(addMovieAsync.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // });
  },
});

export const selectMovies = (state) => {
  return state.movies;
};

export default moviesSlice.reducer;
