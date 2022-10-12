import { useEffect } from "react";
import { useParams } from "react-router-dom";

import AppHeader from "../components/AppHeader/AppHeader";
import LoadingContainer from "../components/LoadingContainer/LoadingContainer";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMovieById } from "../redux/MovieDetails/MovieDetails.actions";
import { reset } from "../redux/MovieDetails/MovieDetails.slice";

export default function Movie() {
  const dispatch = useAppDispatch();
  const { id: movieId } = useParams();

  const movieData = useAppSelector((state) => state.movieDetails.movieData);
  const fetchingData = useAppSelector(
    (state) => state.movieDetails.fetchingData
  );

  useEffect(() => {
    if (movieId) {
      dispatch(getMovieById(parseInt(movieId, 10)));
    }

    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <>
      <AppHeader />
      {fetchingData && <LoadingContainer />}
      {movieData && <MovieDetails data={movieData} />}
    </>
  );
}
