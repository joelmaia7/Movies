import styled from "styled-components";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

import { MovieListItem } from "../../interfaces/movie_list_item";
import { imageBaseURL } from "../../utils/constants";
import { formatDateToLocaleFormat } from "../../utils/string-helper";
import {
  Average,
  Container,
  Poster,
  PosterContainer,
  Title,
  Date,
} from "./style";

interface IProps {
  data: MovieListItem;
}

export default function MovieCard({ data }: IProps) {
  return (
    <Link to={`/movie/${data.id}`}>
      <Container>
        <PosterContainer>
          <LazyLoad height={330} offset={200}>
            {data.poster_path ? (
              <Poster
                src={imageBaseURL + "w220_and_h330_face" + data.poster_path}
              />
            ) : (
              <></>
            )}
          </LazyLoad>
        </PosterContainer>
        <Average>{data.vote_average}</Average>
        <Title>{data.title}</Title>
        <Date>{formatDateToLocaleFormat(data.release_date)}</Date>
      </Container>
    </Link>
  );
}
