import styled from 'styled-components';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';

export const Container = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;  
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  > h4 {
    height: 100%;
    display: flex;
    text-transform: lowercase;
  }

  > svg {
    padding-bottom: 5px;
    margin-left: 10px;
    font-size: 18px;

    &:hover{
      fill: #969696;
    }
    cursor: pointer;
  }
  
`;

export const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
    transition: all 0.3s ease;

    &:hover {
      color: #969696;
    }

    > svg {
      margin-right: 5px; //!important
      font-size: 16px;
    }

    cursor: pointer;
  }
`;

export const ChatMessages = styled.div`

`;

export const ChatBottom = styled.div`
  padding-bottom: 100px;
`;

export const StarBorderOutlinedIcon = styled(StarBorderOutlined)``;
export const InfoOutlinedIcon = styled(InfoOutlined)``;