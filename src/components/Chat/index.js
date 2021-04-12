import React, { useEffect, useRef } from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';


import { Container, Header, HeaderLeft, HeaderRight, ChatMessages, ChatBottom, StarBorderOutlinedIcon, InfoOutlinedIcon } from './styles';

import { selectRoomId } from '../../features/counter/appSlice';
import ChatInput from '../ChatInput';
import Message from '../Message';
import { db } from '../../firebase';

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )
  const [roomMessages, loading] = useCollection(
    roomId && 
    db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  )

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading])

  return (
    <Container>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
                <h4>{`#${roomDetails?.data().name}`}</h4>
                <StarBorderOutlinedIcon />
            </HeaderLeft>

            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>          
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map(doc => {
              const { message, timestamp, user, userImage } = doc.data();

              return(
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatRef}/>
          </ChatMessages>

          <ChatInput 
            chatRef={chatRef}
            channelName={roomDetails?.data().name || ''}
            channelId={roomId}
          />
        </>
      )}
      
    </Container>
  );
}

export default Chat;