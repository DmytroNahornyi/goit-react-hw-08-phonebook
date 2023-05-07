import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const User = styled.p`
  color: #fff;
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 10px;
  min-width: 70px;

  color: #fff;
  font-size: 15px;
  background-color: transparent;
  border: 2px solid yellow;
  border-radius: 7px;

  transition: border 250ms linear;

  &:hover {
    border: 2px solid greenyellow;
  }
`;
