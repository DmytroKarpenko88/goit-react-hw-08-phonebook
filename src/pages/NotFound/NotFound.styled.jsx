import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const NotFoundImg = styled.img`
  margin: 30px auto;
`;

export const Article = styled.p`
  font-size: ${p => p.theme.space[5]}px;
`;

export const LinkStyled = styled(Link)`
  color: ${p => p.theme.colors.accentSecondary};
  text-decoration: underline;
`;
