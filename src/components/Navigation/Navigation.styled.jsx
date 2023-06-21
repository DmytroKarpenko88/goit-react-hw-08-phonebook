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

  &.active {
    color: #1976d2;
    /* color: #19c954; */
  }
`;
