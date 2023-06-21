import { Box } from 'components/Box';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Title } from './Home.styled';
import hero from '../../images/Image 21.06.2023 at 23.57.jpg';

const HomeView = () => {
  return (
    <Box>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>HOW TO USE THE PHONE BOOK</Title>

      <img src={hero} alt='hero' />
    </Box>
  );
};

export default HomeView;
