import styled from 'styled-components';

import { MovieListItem } from "../interfaces/movie_list_item";
import { imageBaseURL } from "../utils/constants";

interface IProps {
    data: MovieListItem;
}

export default function MovieCard({ data } : IProps) {
    return (
        <div>
            <Poster src={imageBaseURL + 'w220_and_h330_face' + data.poster_path}></Poster>
        </div>
    );
}

const Poster = styled.img`
  border-radius: 8px;
`;