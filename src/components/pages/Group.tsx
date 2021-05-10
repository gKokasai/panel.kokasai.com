import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/UserContext';
import { getUserGroupList } from '../../api';
import GroupList from '../organisms/group/GroupList';
import ControlPanelTemplate from '../templates/ControlPanelTemplate';
import { Pages } from '../../pages';

const Group = (): JSX.Element => {
  const auth = useAuth();
  useEffect(
    () => {
      const asyncGet = async () => {
        const result = await getUserGroupList();
        auth.setUser({
          ...auth.user,
          groupList: result.data.group,
        });
      };
      asyncGet()
        .then()
        .catch();
    },
    [],
  );
  return (
    <ControlPanelTemplate page={Pages.group}>
      <GroupList />
    </ControlPanelTemplate>
  );
};

export default Group;
