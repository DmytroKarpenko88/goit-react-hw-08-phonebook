import { RegisterForm } from 'components';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const RegisterView = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegisterView;
