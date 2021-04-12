import React from 'react';

import { Container, MessageInfo} from './styles';

function Message({ message, timestamp, user, userImage }) {
  return(
    <Container>
      <img src={userImage} alt=""/>
      <MessageInfo>
        <strong>
          {user}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </strong>
        <p>{message}</p>
      </MessageInfo>
    </Container>
  );
}

export default Message;