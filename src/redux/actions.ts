import { createAsyncThunk } from "@reduxjs/toolkit";
import httpHelper from "../utils/http-helper";

export const getPopularMoviesList = createAsyncThunk(
  "getPopularMoviesList",
  (page: number, { rejectWithValue }) =>
    httpHelper
      .get({ page }, "movie/popular")
      .then((resp) => resp.data)
      .catch((error) => {
        return rejectWithValue(error);
      })
);
