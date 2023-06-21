import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 15px 0;
  list-style: disc;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin: 10px;
`;

export const NameText = styled.span`
  font-size: 20px;
`;
export const NumberText = styled.span`
  display: block;
  margin-left: auto;
  text-align: end;
  font-size: larger;
`;

export const ButtonDelete = styled.button`
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

export const ButtonEdit = styled.button`
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

export const TextContainer = styled.div`
  display: flex;
  width: 300px;
  gap: 30px;
`;
