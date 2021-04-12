import React from 'react';
import { Button } from '@material-ui/core';

import { Container, Wrapper } from './styles';

import { auth, provider } from '../../firebase';
function Login() {

  const signIn = event => {
    event.preventDefault();
    auth.signInWithPopup(provider).catch((error) => 
    alert(error.message));
  }

  return( 
  <Container>
    <Wrapper>
      <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
      <h2>Sign in to the Slack 0.9</h2>
      <p>vinicius.slack.com</p>

      <Button onClick={signIn}>
        Sign in with Google
      </Button>
    </Wrapper>
  </Container>
  );
}

export default Login;