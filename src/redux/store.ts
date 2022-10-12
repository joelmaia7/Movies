import { combineReducers, configureStore } from '@reduxjs/toolkit'

import MoviesListReducer from './MoviesList/MoviesList.slice';
import MovieDetailsReducer from './MovieDetails/MovieDetails.slice';

export const appReducer = combineReducers({
  moviesList: MoviesListReducer,
  movieDetails: MovieDetailsReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
