import styled from 'styled-components';

export const AuthWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & a {
    padding: 5px 10px;
    transition: color 250ms linear;
  }

  & a:hover {
    color: greenyellow;
  }

  & a.active {
    color: greenyellow;
    background-color: transparent;
    border: 2px solid yellowgreen;
    border-radius: 7px;
    transition: border 250ms linear;
  }

  & a.active:hover {
    border: 2px solid red;
  }
`;
