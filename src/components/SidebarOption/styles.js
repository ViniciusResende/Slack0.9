import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;
  padding-left: 2px;

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  strong > span {
    padding: 15px;
  }

  transition: all 0.3s ease;
  cursor: pointer;
`;

export const SidebarOptionChannel = styled.strong`
  padding: 10px 0;
  font-weight: 300;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  > h2 {
    text-align: center;
    color: #000;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: .5rem;
  width: 100%;

  .inputArea {  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    > input {
      width: 90%;
      padding: .5rem;
      position: relative;
      
      border: 0;
      border-bottom: 1px solid lightgray;
      
      outline: 0;
    }
    &::after{
      box-sizing: border-box;
      border-radius: 0 5rem 5rem 0;
      top: 98%;
      width: 95%;
      content: ' ';
      display: block;
      height: 2px;
      line-height: 0;
      position: relative;
      transform: scale(0);
      transform-origin: left;
      transition: all 0.4s ease;
    }

    &:hover::after,
    &:focus-within::after {
      background-color: lightgray;
      top: 98%;
      content: ' ';
      display: block;
      height: 2px;
      line-height: 0;
      position: relative;
      transform: scale(1);
      transition: all 0.4s ease;
    }
  }

  .formButtons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 60%;
    padding-top: 1.5rem;

    > button,
    > a {
      padding: 0.5rem 1rem;

      background: lightgreen;
      border: 1px solid #000;
      border-radius: 1rem;
      transition: all 0.3s ease;

      &:hover {
        color: #fff;
        border-color: #c4c4c4;
        background: green;
      }
      cursor: pointer;
    }

    > a{
      color: #000;
      font-size: 0.8rem;
      text-decoration: none;
      background: #ff7066;

      &:hover {
        background: red;
      }
    }
  }
`;