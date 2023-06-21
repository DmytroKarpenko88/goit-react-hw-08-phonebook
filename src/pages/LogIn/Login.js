import { LoginForm } from 'components';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Img, LoginBox } from './Login.styled';
import LoginImg from '../../images/login.jpg';

const LoginView = () => {
  return (
    <LoginBox>
      <Helmet>
        <title>Log In</title>
      </Helmet>

      <LoginForm />
      <Img src={LoginImg} alt="login" />
    </LoginBox>
  );
};

export default LoginView;
