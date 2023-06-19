import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

// import HomeView from 'pages/Home/Home';
// import RegisterView from 'pages/Register/Register';
// import LoginView from 'pages/LogIn/Login';
// import Contacts from 'pages/Contacts/Contacts';
// import NotFound from 'pages/NotFound/NotFound';
import { Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomeView = lazy(() => import('pages/Home/Home'));
const RegisterView = lazy(() => import('pages/Register/Register'));
const LoginView = lazy(() => import('pages/LogIn/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
