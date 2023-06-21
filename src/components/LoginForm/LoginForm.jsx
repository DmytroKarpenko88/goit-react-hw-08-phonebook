import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, FormText } from './LoginForm.styled';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormText>
        Email
        <Input type="email" name="email" />
      </FormText>
      <FormText>
        Password
        <Input type="password" name="password" />
      </FormText>
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </Form>
  );
};
