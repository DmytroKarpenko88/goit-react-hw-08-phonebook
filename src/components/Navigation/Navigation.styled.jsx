import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 5px;
  text-decoration: none;

  width: 200px;
  font-weight: 700;

  background-color: #bbe763;
  &.active {
    background-color: #46f17f;
  }
`;
