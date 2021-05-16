import React, { FC } from 'react';
import ControlPanelTemplate from '../templates/ControlPanelTemplate';
import { Pages } from '../../pages';
import DocumentList from '../organisms/document/DocumentList';

const Document: FC = (): JSX.Element => (
  <ControlPanelTemplate page={Pages.document}>
    <DocumentList />
  </ControlPanelTemplate>
);

export default Document;
