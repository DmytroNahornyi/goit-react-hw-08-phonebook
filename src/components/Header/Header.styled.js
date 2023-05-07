import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled.header`
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;

  &:hover {
    color: greenyellow;
    transition: color 250ms linear;
  }
`;

export const HeaderLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  transition: color 250ms linear;

  &:hover {
    color: greenyellow;
    transition: color 250ms linear;
  }
`;
