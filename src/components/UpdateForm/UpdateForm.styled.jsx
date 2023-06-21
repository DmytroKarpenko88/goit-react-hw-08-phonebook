import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 5px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  max-width: 150px;
  height: 30px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 30px;
  border: 1px solid #8f9092;
  transition: all 0.2s ease;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:active {
    background-image: linear-gradient(
      to top,
      #007bff 0%,
      #268efd 80%,
      #65b0ff 100%
    );
    background-color: #007bff;
    color: black;
  }
`;
