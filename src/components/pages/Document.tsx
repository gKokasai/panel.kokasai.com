import React from 'react';
import ControlPanelTemplate from '../templates/ControlPanelTemplate';
import { Pages } from '../../pages';

const Document = (): JSX.Element => (
  <ControlPanelTemplate page={Pages.document}>
    <>資料ページになります</>
  </ControlPanelTemplate>
);

export default Document;
