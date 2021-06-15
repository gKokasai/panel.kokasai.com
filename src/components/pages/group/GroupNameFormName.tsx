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
  const { groupName, formName } = params;
  return (
    <ControlPanelTemplate page={Pages.groupNameFormName}>
      <GroupNameFormContent
        load={() => {
          getGroupForm(params.groupName, params.formName).then((response) => {
            auth.setUser({
              ...auth.user,
              group: {
                ...auth.user?.group,
                [groupName]: {
                  ...auth.user?.group?.[groupName],
                  form: {
                    ...auth.user?.group?.[groupName].form,
                    [formName]: response.data,
                  },
                },
              },
            });
          });
        }}
        LoadComponent={<LinearLoading />}
        item={auth.user?.group?.[groupName]?.form?.[params.formName]}
        formName={params.formName}
        groupName={params.groupName}
      />
    </ControlPanelTemplate>
  );
};

export default GroupNameFormName;
