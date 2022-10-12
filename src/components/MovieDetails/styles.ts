import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg,#283140 30%, #28314096 75%, transparent);
  height: auto;
  padding: 40px calc((100% - 1140px) / 2);

  @media (max-width: 1200px) {
    padding: 40px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 58px;
  font-family: "Barlow Condensed";
  font-weight: 700;
  margin: 0 0 10px;
  line-height: 65px;

  @media (max-width: 767px) {
    font-size: 38px;
    line-height: 44px;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Average = styled.div`
  font-family: "Barlow Condensed";
  font-weight: 500;
  color: #fff;
  font-size: 18px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const RunTime = styled.div`
  font-family: "Barlow Condensed";
  font-weight: 500;
  color: #fff;
  font-size: 18px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Genre = styled.div`
  font-family: "Barlow Condensed";
  font-weight: 500;
  color: #fff;
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid;
  padding: 0 11px;
  border-radius: 17px;
  font-size: 15px;
`;

export const Description = styled.div`
  color: #fff;
  font-size: 22px;
  font-family: "Roboto";
  line-height: 27px;
  margin: 20px 0;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 23px;
  }
`;
