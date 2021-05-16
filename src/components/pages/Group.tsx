import React from 'react';
import GroupList from '../organisms/group/GroupList';
import ControlPanelTemplate from '../templates/ControlPanelTemplate';
import { Pages } from '../../pages';

const Group = (): JSX.Element => (
  <ControlPanelTemplate page={Pages.group}>
    <GroupList />
  </ControlPanelTemplate>
);

export default Group;
