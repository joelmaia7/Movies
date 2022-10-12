import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/movie";
import httpHelper from "../../utils/http-helper";

export const getMovieById = createAsyncThunk<Movie, number>(
    "getMovieById",
    (id, { rejectWithValue }) =>
      httpHelper
        .get({}, `movie/${id}`)
        .then((resp) => resp.data)
        .catch((error) => {
          return rejectWithValue(error);
        })
  );