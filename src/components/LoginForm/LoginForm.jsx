// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import { Form, FormText } from './LoginForm.styled';

export const LoginForm = () => {
  //   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormText>
        Email
        <input type="email" name="email" />
      </FormText>
      <FormText>
        Password
        <input type="password" name="password" />
      </FormText>
      <button type="submit">Log In</button>
    </Form>
  );
};
