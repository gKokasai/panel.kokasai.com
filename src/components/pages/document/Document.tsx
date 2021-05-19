import React, { FC } from 'react';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import DocumentList from '../../organisms/document/DocumentList';
import { getDocument } from '../../../api/api';
import { useAlert } from '../../../contexts/AlertContext';

const Document: FC = (): JSX.Element => {
  const alert = useAlert();
  const queryParameter = window.location.search;
  if (queryParameter) {
    getDocument(queryParameter.substring(1)).then((response) => {
      const url = window.URL || webkitURL;
      window.location.replace(url.createObjectURL(response.data));
    }).catch(() => {
      alert.error('資料の取得に失敗しました');
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
