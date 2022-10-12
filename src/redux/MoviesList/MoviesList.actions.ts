import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieListItem } from "../../interfaces/movie_list_item";
import httpHelper from "../../utils/http-helper";

type GetListResponse = {
  page: number,
  results: Array<MovieListItem>,
  total_results: number,
  total_pages: number,
}

type GetMoviesParams = {
  page: number;
  query?: String | null;
}

export const getMoviesList = createAsyncThunk<GetListResponse, GetMoviesParams>(
  "getMoviesList",
  ({ page, query }, { rejectWithValue }) => {
    const endpoint = query ? "search/movie" : "movie/popular";
    return httpHelper
      .get({ page, query }, endpoint)
      .then((resp) => resp.data)
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);
