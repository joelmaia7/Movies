import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background-color: #394250;

    img {
      scale: 1.05;
    }
  }
`;

export const PosterContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 330px;
  overflow: hidden;
  background-color: #394250;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .2s;
`;

export const Average = styled.div`
  display: flex;
  width: 38px;
  height: 38px;
  border-radius: 100%;
  background-color: #283140;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-family: "Barlow Condensed";
  border: 2px solid #cfcfcf;
  margin: -20px 0 10px 16px;
  position: relative;
  font-size: 17px;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 16px;
  font-family: "Roboto";
  margin-bottom: 0;
`;

export const Date = styled.span`
  color: #CCC;
  font-size: 12px;
`;