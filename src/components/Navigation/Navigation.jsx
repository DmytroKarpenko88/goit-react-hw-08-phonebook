import React from 'react';
import { Nav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {/* <StyledLink to="/login">Login</StyledLink> */}
      {/* <StyledLink to="/register">Register</StyledLink> */}
      <StyledLink to="/contacts">Contacts</StyledLink>
    </Nav>
  );
};
