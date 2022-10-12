import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ConfigProvider, Divider, List, Spin } from "antd";
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMoviesList } from "../redux/MoviesList/MoviesList.actions";
import ListContainer from "../components/ListContainer/ListContainer";
import MovieCard from "../components/MovieCard/MovieCard";
import AppHeader from "../components/AppHeader/AppHeader";
import styled from "styled-components";
import { SmileOutlined } from "@ant-design/icons";
import Empty from "../components/Empty/Empty";

function App() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const moviesList = useAppSelector((state) => state.moviesList.list);
  const totalResults = useAppSelector((state) => state.moviesList.totalResults);
  const fetchingData = useAppSelector((state) => state.moviesList.fetchingData);
  const currentPage = useAppSelector((state) => state.moviesList.currentPage);

  useEffect(() => {
    dispatch(getMoviesList({ page: 1, query }));
  }, [query]);

  const loadMoreData = () => {
    if (fetchingData) {
      return;
    }

    dispatch(getMoviesList({ page: currentPage + 1, query }));
  };

  const title = query ? `Resultado da busca por: ${query}` : "Filmes populares";

  return (
    <>
      <AppHeader query={query || undefined} />
      <ListContainer>
        <Title>{title}</Title>

        <InfiniteScroll
          dataLength={moviesList.length}
          next={loadMoreData}
          hasMore={moviesList.length < totalResults}
          loader={<Spin />}
          scrollableTarget="scrollableDiv"
          style={{ overflowX: 'hidden' }}
        >
          <ConfigProvider renderEmpty={() => <Empty fetchingData={fetchingData} />}>
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }}
              dataSource={moviesList}
              renderItem={(item) => (
                <List.Item>
                  <MovieCard data={item} />
                </List.Item>
              )}
            />
          </ConfigProvider>
        </InfiniteScroll>
      </ListContainer>
    </>
  );
}

const Title = styled.h4`
  color: #fff;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 500;
  font-size: 30px;
`;

export default App;
