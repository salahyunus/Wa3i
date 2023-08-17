import { createSlice } from "@reduxjs/toolkit";
// start with blank strings
const initialState = {
  recommended: null,
  newMovies: null,
  original: null,
  trending: null,
};
// create a slice called movie to use in redux storejs
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // 1 reducer that function takes current state and action
    // and updates state to set movies
    setMovies: (state, action) => {
      state.recommended = action.payload.recommend;
      state.newMovies = action.payload.newMovies;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommended = (state) => state.movie.recommended;
export const selectNewMovies = (state) => state.movie.newMovies;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
// use these vars to easily fetch/call pieces of data (name, email, photo)

export default movieSlice.reducer;
