import React, { useRef } from 'react';
import firebase from 'firebase'
import { Button } from '@material-ui/core';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Container } from './styles';

function ChatInput({channelName, channelId, chatRef}) {
  const [user] = useAuthState(auth);
  const InputRef = useRef(null);

  const sendMessage = event => {
    event.preventDefault(); //Prevents refresh

    if(!channelId) {
      return false;
    }
 
    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .add({
        message: InputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    
    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    });

    InputRef.current.value = '';
  }
  return (
    <Container>
      <form action="" onSubmit={sendMessage}>
        <input type="text" ref={InputRef} placeholder={`Message #${channelName}`}/>
        <Button hidden type='submit' onClick={sendMessage}>
          Send
        </Button>
      </form>
    </Container>
  );
}

export default ChatInput;