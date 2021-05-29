import React, { FC } from "react";
import ControlPanelTemplate from "../../templates/ControlPanelTemplate";
import { Pages } from "../../../pages";
import DocumentList from "../../organisms/document/DocumentList";
import { getUserDocumentList } from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";
import LinearLoading from "../../molecules/LinearLoading";

const Document: FC = (): JSX.Element => {
  const auth = useAuth();
  return (
    <ControlPanelTemplate page={Pages.document}>
      <DocumentList
        item={auth.user?.documentList}
        load={() => {
          getUserDocumentList().then((response) =>
            auth.setUser({ ...auth.user, documentList: response.data.document })
          );
        }}
        LoadComponent={<LinearLoading />}
      />
    </ControlPanelTemplate>
  );
};

export default Document;
