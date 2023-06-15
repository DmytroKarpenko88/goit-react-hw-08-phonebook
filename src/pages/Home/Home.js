import { Box } from 'components/Box';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Title } from './Home.styled';

const HomeView = () => {
  return (
    <Box>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>HomeView</Title>
    </Box>
  );
};

export default HomeView;
