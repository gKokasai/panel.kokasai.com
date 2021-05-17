import React, { useEffect } from 'react';
import GroupList from '../../organisms/group/GroupList';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import { getUserGroupList } from '../../../api/api';
import { useAuth } from '../../../contexts/AuthContext';

const Group = (): JSX.Element => {
  const auth = useAuth();
  useEffect(
    () => {
      if (!auth.user?.groupList) {
        getUserGroupList().then((response) => auth.setUser({ ...auth.user, groupList: response.data.group }));
      }
    }, [], // eslint-disable-line react-hooks/exhaustive-deps
  );
  return (
    <ControlPanelTemplate page={Pages.group}>
      <GroupList />
    </ControlPanelTemplate>
  );
};

export default Group;
