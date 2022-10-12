import {
  createSlice,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import { MovieListItem } from "../../interfaces/movie_list_item";
import { getMoviesList } from "./MoviesList.actions";

interface InitialState {
  list: Array<MovieListItem>;
  fetchingData: boolean;
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

const initialState: InitialState = {
  list: [],
  fetchingData: false,
  currentPage: 1,
  totalPages: 0,
  totalResults: 0,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder.addMatcher(isPending(getMoviesList), (state) => {
      state.fetchingData = true;
    });
    builder.addMatcher(isRejected(getMoviesList), (state) => {
      state.fetchingData = false;
    });
    builder.addMatcher(isFulfilled(getMoviesList), (state, { payload }) => {
      state.fetchingData = false;
      state.totalPages = payload.total_pages;
      state.totalResults = payload.total_results;
      state.currentPage = payload.page;

      if (payload.page == 1) {
        state.list = payload.results;
      } else {
        state.list = [...state.list, ...payload.results];
      }
    });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
