import { RegisterForm } from 'components';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Img, RegisterBox } from './Register.styled';
import RegImg from '../../images/registration.jpg';

const RegisterView = () => {
  return (
    <RegisterBox>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <RegisterForm />

      <Img src={RegImg} alt="registration" />
    </RegisterBox>
  );
};

export default RegisterView;
