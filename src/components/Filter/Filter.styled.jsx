import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
`;

export const Input = styled.input`
  padding: 5px;
  padding-left: 30px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  margin-left: auto;
  max-width: 100px;
  padding: 4px 12px;
  background-color: #ffffff;
  border: 1px solid #959595;

  border-radius: 4px;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:active {
    background-color: #007bff;
    color: white;
  }
`;
