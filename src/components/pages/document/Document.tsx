import React, { FC } from 'react';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import DocumentList from '../../organisms/document/DocumentList';
import { getDocument } from '../../../api/api';

const Document: FC = (): JSX.Element => {
  const queryParameter = window.location.search;
  if (queryParameter) {
    getDocument(queryParameter.substring(1)).then((response) => {
      const url = window.URL || webkitURL;
      window.location.replace(url.createObjectURL(response.data));
    });
    return <></>;
  }
  return (
    <ControlPanelTemplate page={Pages.document}>
      <DocumentList />
    </ControlPanelTemplate>
  );
};

export default Document;
