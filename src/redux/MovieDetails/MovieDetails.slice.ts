import {
  createSlice,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/movie";
import { getMovieById } from "./MovieDetails.actions";

interface InitialState {
  fetchingData: boolean;
  movieData: Movie | null;
}

const initialState: InitialState = {
  fetchingData: false,
  movieData: null,
};

export const movieDetailsSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder.addMatcher(isPending(getMovieById), (state) => {
      state.fetchingData = true;
    });
    builder.addMatcher(isRejected(getMovieById), (state) => {
      state.fetchingData = false;
    });
    builder.addMatcher(isFulfilled(getMovieById), (state, { payload }) => {
      state.fetchingData = false;
      state.movieData = payload;
    });
  },
});

export const { reset } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
