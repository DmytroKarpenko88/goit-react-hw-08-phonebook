import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

import HomeView from 'pages/Home/Home';
import RegisterView from 'pages/Register/Register';
import LoginView from 'pages/LogIn/Login';
import Contacts from 'pages/Contacts/Contacts';
import NotFound from 'pages/NotFound/NotFound';
import { Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
