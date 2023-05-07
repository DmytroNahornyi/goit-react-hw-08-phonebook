import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageSection = styled.section`
  padding: 40px 0;
`;
export const HomePageContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0px 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
    margin: 0 auto;
  }
`;
export const HomePageWrap = styled.div`
  color: greenyellow;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: rgb(150, 150, 150) 10px 10px 20px;
  background-color: #2c3e50;
  text-align: center;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
  }
`;

export const HomePageLink = styled(Link)`
  color: #fff;

  &:hover {
    color: greenyellow;
    transition: color 250ms linear;
  }
`;
