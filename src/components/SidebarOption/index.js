import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-awesome-modal';

import { Container, SidebarOptionChannel, ModalContent, Form } from './styles';

import { enterRoom } from '../../features/counter/appSlice';
import { db } from '../../firebase';
function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const [modalDisplay, setModalDisplay] = useState(false);
  const [values, setValues] = useState({
    channelName: '',
  })

  const addChannel = ()  => {
    setModalDisplay(true);
  }

  const selectChannel = () => {
    if(id) {
      dispatch(
        enterRoom({
          roomId: id
        })
      )
    }
  }

  function handleInputChange(event){
    values[event.target.name] = event.target.value;
    setValues(values);
  }

  function closeContactModal() {
    setModalDisplay(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (values.channelName) {
      db.collection('rooms').add({
        name: values.channelName,
      })
    }

    setModalDisplay(false);
  }
  return (
    <>
      {addChannelOption && (
        <Modal visible={modalDisplay} width="20%" height="22%" effect="fadeInDown" onClickAway={() => closeContactModal()}>
          <ModalContent>
            <h2>Please, type the name of the new channel:</h2>
            <Form onSubmit={onSubmit}>
              <div className="inputArea">
                <input type="text" id="channelName" name="channelName" placeholder="Name..." onChange={handleInputChange} required/>
              </div>
              <div className="formButtons">
                <a className="modalClose" href="#home" onClick={() => closeContactModal()}>Cancel</a>
                <button type="submit" value="Confirm">Confirm</button>                
              </div>
            </Form>
          </ModalContent>
        </Modal>
      )}
      <Container
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon fontSize='small' style={{ padding: '10px' }}/>}
        {Icon ? (
          <strong>{title}</strong>
        ): (
          <SidebarOptionChannel>
            <span>#</span> {title}
          </SidebarOptionChannel>
        )}
      </Container>
    </>
  );
}

export default SidebarOption;