import React from 'react';
import { useParams } from 'react-router-dom';
import { Pages } from '../../../pages';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import GroupNameList from '../../organisms/group/GroupNameList';

const GroupName = (): JSX.Element => {
  const params: {groupName: string} = useParams();
  return (
    <ControlPanelTemplate page={Pages.groupName}>
      <GroupNameList groupName={params.groupName} />
    </ControlPanelTemplate>
  );
};

export default GroupName;
