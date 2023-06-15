import { AuthNav, UserMenu, Navigation } from 'components';
import { Header } from './AppBar.styled';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav />
      <UserMenu /> */}
    </Header>
  );
};

export default AppBar;
