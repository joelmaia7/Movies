import { createSlice, configureStore, isPending, isFulfilled, isRejected, current, PayloadAction } from '@reduxjs/toolkit'
import { MovieListItem } from '../interfaces/movie_list_item';
import { getPopularMoviesList } from './actions';

interface InitialState {
  list: Array<MovieListItem>;
  fetchingData: boolean;
  currentPage: number;
  totalPages: number;
}

const initialState: InitialState = {
  list: [],
  fetchingData: false,
  currentPage: 1,
  totalPages: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
        state.currentPage = action.payload.page;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(isPending(getPopularMoviesList), (state) => {
        state.fetchingData = true;
    });
    builder.addMatcher(isFulfilled(getPopularMoviesList), (state, { payload }) => {
        state.fetchingData = false;
        state.totalPages = payload.total_pages;

        if (payload.page == 1) {
          state.list = payload.results;
        } else {
          state.list = [...state.list, ...payload.results];
        }
    });
    builder.addMatcher(isRejected(getPopularMoviesList), (state) => {
        state.fetchingData = false;
    });
  },
})

export const { setCurrentPage } = moviesSlice.actions;
