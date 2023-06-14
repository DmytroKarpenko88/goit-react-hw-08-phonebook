import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
};
