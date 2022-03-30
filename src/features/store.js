import { configureStore } from "@reduxjs/toolkit";
import moviesReducers  from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
      movies: moviesReducers,
  }
})

export default store;