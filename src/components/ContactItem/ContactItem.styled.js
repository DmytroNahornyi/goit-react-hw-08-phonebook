import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid black; */
  padding: 5px 10px;

  background-color: rgb(238, 250, 238);
  border-radius: 8px;
  color: #000;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    padding: 2px 4px;
    border-radius: 5px;
    background-color: #2c3e50;
    color: #fff;

    transition: background-color 250ms linear;

    & svg {
      width: 30px;
      height: auto;
    }

    &:disabled {
      opacity: 20%;
    }

    &:hover {
      background-color: red;
    }
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  gap: 5px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 17px;
  }
`;

export const TelLink = styled.a`
  border-bottom: solid 1px #fff;

  &:hover {
    color: #2c3e50;
    border-bottom: solid 1px #2c3e50;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 20px;
`;
