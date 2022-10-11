import styled from 'styled-components';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPopularMoviesList } from "../redux/actions";

import { setCurrentPage } from "../redux/slice";
import { Button, List } from "antd";
import Container from '../components/Container';
import MovieCard from '../components/MovieCard';

function App() {
  const dispatch = useAppDispatch();
  const moviesList = useAppSelector((state) => state.list);
  const fetchingData = useAppSelector((state) => state.fetchingData);
  const page = useAppSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getPopularMoviesList(page));
  }, [page]);

  const loadMore =
    moviesList.length != 0 && !fetchingData ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={() => dispatch(setCurrentPage({ page: page + 1 }))}>
          Carregar mais
        </Button>
      </div>
    ) : null;

  return (
    <Container>
      <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={moviesList}
        loadMore={loadMore}
        loading={fetchingData}
        renderItem={(item) => (
          <List.Item>
            <MovieCard data={item} />
          </List.Item>
        )}
      />
    </Container>
  );
}

export default App;
