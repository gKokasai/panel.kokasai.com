import React, { FC, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ControlPanelTemplate from '../templates/ControlPanelTemplate';
import { getUserDocumentList } from '../../api/api';
import { Pages } from '../../pages';
import DocumentList from '../organisms/document/DocumentList';

const Document: FC = (): JSX.Element => {
  const auth = useAuth();
  useEffect(
    () => {
      const asyncGet = async () => {
        const result = await getUserDocumentList();
        auth.setUser({ ...auth.user, documentList: result.data.document });
      };
      asyncGet().then().catch();
    },
  );

  return (
    <ControlPanelTemplate page={Pages.document}>
      <DocumentList />
    </ControlPanelTemplate>
  );
};

export default Document;
