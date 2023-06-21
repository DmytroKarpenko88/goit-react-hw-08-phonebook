import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, FormText } from './RegisterForm.styled';

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(newUser));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormText>
        Username
        <Input type="text" name="name" />
      </FormText>
      <FormText>
        Email
        <Input type="email" name="email" />
      </FormText>
      <FormText>
        Password
        <Input type="password" name="password" />
      </FormText>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Form>
  );
};
