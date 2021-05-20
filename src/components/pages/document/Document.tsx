import React, { FC } from 'react';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import DocumentList from '../../organisms/document/DocumentList';
import { getUserDocumentList } from '../../../api/api';
import { useAuth } from '../../../contexts/AuthContext';

const Document: FC = (): JSX.Element => {
  const auth = useAuth();
  return (
    <ControlPanelTemplate page={Pages.document}>
      <DocumentList
        items={auth.user?.documentList}
        load={() => {
          getUserDocumentList().then((response) => auth.setUser({ ...auth.user, documentList: response.data.document }));
        }}
      />
    </ControlPanelTemplate>
  );
};

export default Document;
