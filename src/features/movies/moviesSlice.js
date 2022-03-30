import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies', 
   async(item) =>{
     console.log("Item", item)
      //const movieTest = {item};
      const response = await movieApi.get(`/?apikey=${APIKey}&s=${item}&type=movie`)
      .catch((error)=>{
          console.log("Error",error)
      })
      console.log("Response fro API", response)
      return response.data;
})
export const fetchAsyncSeries = createAsyncThunk(
  'movies/fetchAsyncSeries', 
   async(item) =>{
      //const seriesTest = "Friends";
      const response = await movieApi.get(`/?apikey=${APIKey}&s=${item}&type=series`)
      .catch((error)=>{
          console.log("Error",error)
      })
      console.log("Response fro API", response)
      return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail', 
   async(id) =>{
      const response = await movieApi.get(`/?apikey=${APIKey}&i=${id}&plot=full`)
      .catch((error)=>{
          console.log("Error",error)
      })
      console.log("Response fro API", response)
      return response.data;
})

const initialState = {
    movies: {},
    series:{},
    selectmovieorshow: {},
    isLoading: false,
    error: null,
  }

  export const moviesSlice = createSlice({
      name:'movies',
      initialState,
        reducers:{reset: () => initialState,},
            extraReducers: (builder) => {
              // Add reducers for additional action types here, and handle loading state as needed
              builder.addCase(fetchAsyncMovies.pending, (state) => {
                state.isLoading = true
                state.error = null
              })

              builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                // Add user to the state array
                state.isLoading = false
                state.movies = action.payload
              })
              builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
                // Add user to the state array
                if (action.payload) {
                    state.error = {
                    message: action.payload.message,
                  }
                } else {
                  state.error = action.error
                }
                state.isLoading = false
              })

              //Series
              builder.addCase(fetchAsyncSeries.pending, (state) => {
                state.isLoading = true
                state.error = null
              })

              builder.addCase(fetchAsyncSeries.fulfilled, (state, action) => {
                // Add user to the state array
                state.series = action.payload
              })

              builder.addCase(fetchAsyncSeries.rejected, (state, action) => {
                // Add user to the state array
                if (action.payload) {
                    state.error = {
                    message: action.payload.message,
                  }
                } else {
                  state.error = action.error
                }
                state.isLoading = false
              })
              //Fetch All Movies and Shows
              builder.addCase(fetchAsyncMovieOrShowDetail.pending, (state) => {
                state.isLoading = true
                state.error = null
              })
              builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
                // Add user to the state array
                state.selectmovieorshow = action.payload
              })
              builder.addCase(fetchAsyncMovieOrShowDetail.rejected, (state, action) => {
                // Add user to the state array
                if (action.payload) {
                    state.error = {
                    message: action.payload.message,
                  }
                } else {
                  state.error = action.error
                }
                state.isLoading = false
              })
            },
  })
  // Action creators are generated for each case reducer function
export const { reset } = moviesSlice.actions;
export const selectLoading=(state)=> state.movies.isLoading;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllSeries=(state)=>state.movies.series;
export const getMovieorShowDetail=(state)=>state.movies.selectmovieorshow;

export default moviesSlice.reducer