import React from 'react';
import ControlPanelTemplate from '../templates/ControlPanelTemplate';
import { Pages } from '../../pages';

const Empty = (): JSX.Element => (
  <ControlPanelTemplate page={Pages.empty}>
    <></>
  </ControlPanelTemplate>
);

export default Empty;
