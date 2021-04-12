import styled from 'styled-components';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import Create from '@material-ui/icons/Create';

export const SidebarContainer = styled.nav`
  color: #fff;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > svg {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;  
    transition: opacity 0.3s ease;

    &:hover{
      opacity: 0.8;
    }

    cursor: pointer;
  }
`;

export const HeaderInfo = styled.div`
  flex: 1;

  > strong {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > span {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > span > svg {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;

export const FiberManualRecordIcon = styled(FiberManualRecord)``;
export const CreateIcon = styled(Create)``;