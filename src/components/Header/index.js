import React from 'react';



import { useAuthState } from 'react-firebase-hooks/auth';

import { HeaderContainer, HeaderLeft, HeaderAvatar, AcessTimeIcon, HeaderSearch, SearchIcon, HeaderRight, HelpOutlineIcon } from './styles';

import { auth } from '../../firebase';
function Header() {
  const [user] = useAuthState(auth);
  
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar 
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AcessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder='Search...'/>
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;