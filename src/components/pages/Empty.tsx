import React from 'react';
import ControlPanelTemplate from '../templates/ControlPanelTemplate';
import { EmptyPage } from '../../pages';

const Empty = (): JSX.Element => (
  <ControlPanelTemplate page={EmptyPage}>
    <></>
  </ControlPanelTemplate>
);

export default Empty;
