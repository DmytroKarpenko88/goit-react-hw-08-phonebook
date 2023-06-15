import React from 'react';
import { Article, LinkStyled, NotFoundImg } from './NotFound.styled';
import { Box } from 'components/Box';

const NotFound = () => {
  return (
    <>
      <NotFoundImg src={''} alt="Not found icon" width={500} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={30}
        pb={40}
      >
        <h1>We couldn't find this page.</h1>
        <Article>
          Click <LinkStyled to="/">here</LinkStyled> to get back to home page
        </Article>
      </Box>
    </>
  );
};

export default NotFound;
