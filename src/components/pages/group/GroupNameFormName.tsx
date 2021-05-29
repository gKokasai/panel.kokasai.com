import React from "react";
import { useParams } from "react-router-dom";
import ControlPanelTemplate from "../../templates/ControlPanelTemplate";
import { Pages } from "../../../pages";
import { useAuth } from "../../../contexts/AuthContext";
import { getGroupForm } from "../../../api/api";
import LinearLoading from "../../molecules/LinearLoading";
import GroupNameFormContent from "../../organisms/group/GroupNameFormContent";

const GroupNameFormName = (): JSX.Element => {
  const auth = useAuth();
  const params: { groupName: string; formName: string } = useParams();
  return (
    <ControlPanelTemplate page={Pages.groupNameFormName}>
      <GroupNameFormContent
        load={() => {
          getGroupForm(params.groupName, params.formName).then((response) => {
            auth.setUser({
              ...auth.user,
              form: {
                ...auth.user?.form,
                [params.formName]: response.data,
              },
            });
          });
        }}
        LoadComponent={<LinearLoading />}
        item={auth.user?.form?.[params.formName]}
        formName={auth.user?.formList?.formName?.name}
      />
    </ControlPanelTemplate>
  );
};

export default GroupNameFormName;
