import styled from 'styled-components';

export const WrapFilter = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(208, 250, 208);
  padding: 10px 30px;

  @media screen and (min-width: 1280px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #000;

  @media screen and (max-width: 400px) {
    gap: 8px;
    flex-direction: column;
  }

  & input {
    width: 100%;
    flex: 1 1 0;
    padding-left: 8px;
    border: none;
    border-color: rgb(208, 250, 208);
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #000;
    }
  }
`;
