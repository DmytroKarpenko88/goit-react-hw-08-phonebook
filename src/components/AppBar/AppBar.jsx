import { AuthNav, UserMenu, Navigation } from 'components';
import { Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  );
};

export default AppBar;
