import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AcessTime from '@material-ui/icons/AccessTime';
import Search from '@material-ui/icons/Search';
import HelpOutline from '@material-ui/icons/HelpOutline';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > svg {
    margin-left: auto;
    margin-right: 30px;

    &:hover {
      fill: #969696;
    }

    cursor: pointer;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
`

export const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;
  transition: all 0.3s ease;

  > input {
    background: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }

  &:hover {
    border-color: #fff;

    > svg {
      fill: #fff;
    }
  }

  &:focus-within {
    border-color: #fff;

    > svg {
      fill: #fff;
    }
  }

`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > svg {
    margin-left: auto;
    margin-right: 20px;

    &:hover {
      fill: #969696;
    }

    cursor: pointer;
  }
`;

export const AcessTimeIcon = styled(AcessTime)``;
export const SearchIcon = styled(Search)``;
export const HelpOutlineIcon = styled(HelpOutline)``;