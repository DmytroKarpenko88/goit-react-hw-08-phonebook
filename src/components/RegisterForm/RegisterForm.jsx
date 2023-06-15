import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, FormText } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(form);
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormText>
        Username
        <input type="text" name="name" />
      </FormText>
      <FormText>
        Email
        <input type="email" name="email" />
      </FormText>
      <FormText>
        Password
        <input type="password" name="password" />
      </FormText>
      <button type="submit">Register</button>
    </Form>
  );
};
