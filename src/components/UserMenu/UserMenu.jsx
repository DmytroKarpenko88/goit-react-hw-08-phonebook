import { UserName, Wrapper } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { LuLogOut } from 'react-icons/lu';

import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        <LuLogOut />
      </Button>
    </Wrapper>
  );
};
