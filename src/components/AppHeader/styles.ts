import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 50px;
  background-color: #1a1e26;

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  color: #fff;
  margin: 0;
  font-size: 35px;
`;