import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import Contacts from 'views/Contacts';
import NotFound from 'views/NotFound';
import { Container } from './App.styled';

const App = () => {
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
