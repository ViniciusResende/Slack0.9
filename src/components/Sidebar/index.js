import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { 
  Add, 
  Apps, 
  BookmarkBorder, 
  Drafts, 
  ExpandLess, 
  ExpandMore, 
  FileCopy, 
  Inbox, 
  InsertComment, 
  PeopleAlt 
} from '@material-ui/icons';

import { SidebarContainer, SidebarHeader, HeaderInfo, FiberManualRecordIcon, CreateIcon } from './styles';

import SidebarOption from '../SidebarOption';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <HeaderInfo>
          <strong>AF lab</strong>
          <span>
            <FiberManualRecordIcon />
            {user.displayName}
          </span>
        </HeaderInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved itens" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr/>

      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr/>
      <SidebarOption Icon={Add} addChannelOption title="Add Channels"/>

      {channels?.docs.map(doc => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
      ))}

    </SidebarContainer>
  );
}

export default Sidebar;