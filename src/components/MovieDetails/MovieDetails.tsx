import { ClockCircleOutlined, StarOutlined } from "@ant-design/icons";

import { Movie } from "../../interfaces/movie";
import { imageBaseURL } from "../../utils/constants";
import {
  Average,
  BannerImg,
  Container,
  Content,
  Description,
  Genre,
  Infos,
  RunTime,
  Title
} from "./styles";

interface IProps {
  data: Movie;
}

export default function MovieDetails({ data } : IProps) {
  return (
    <Container>
      <BannerImg src={imageBaseURL + "original" + data?.backdrop_path} />
      <Content>
        <Title>{data?.title}</Title>
        <Infos>
          <Average>
            <StarOutlined />
            {data.vote_average.toFixed(2)}
          </Average>
          <RunTime>
            <ClockCircleOutlined />
            {`${data.runtime}min`}
          </RunTime>

          {data.genres.map((genre) => (
            <Genre>{genre.name}</Genre>
          ))}
        </Infos>
        <Description>{data.overview}</Description>
      </Content>
    </Container>
  );
}
