import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px calc((100% - 1140px) / 2);
  background-color: #283140;

  @media (max-width: 1200px) {
    padding: 50px 30px;
  }
`;