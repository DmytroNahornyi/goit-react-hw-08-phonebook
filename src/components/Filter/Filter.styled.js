import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #ccc;

  &:focus {
    outline: none;
    border: 2px solid #333;
  }
`;

export const Label = styled.label`
  margin-right: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #000;
`;
