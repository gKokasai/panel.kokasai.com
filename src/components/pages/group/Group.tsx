import React from 'react';
import GroupList from '../../organisms/group/GroupList';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import { getUserGroupList } from '../../../api/api';
import { useAuth } from '../../../contexts/AuthContext';

const Group = (): JSX.Element => {
  const auth = useAuth();
  return (
    <ControlPanelTemplate page={Pages.group}>
      <GroupList
        items={auth.user?.groupList}
        load={() => {
          getUserGroupList().then((response) => auth.setUser({ ...auth.user, groupList: response.data.group }));
        }}
      />
    </ControlPanelTemplate>
  );
};

export default Group;
