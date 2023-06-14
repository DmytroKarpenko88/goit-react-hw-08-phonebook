import React from 'react';
import { UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Wrapper>
      <UserName>
        Welcome,
        {/* {user.name} */}
      </UserName>
      <button
        type="button"
        // onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </Wrapper>
  );
};
