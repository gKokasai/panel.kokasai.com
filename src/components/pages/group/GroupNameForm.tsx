import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { Pages } from "../../../pages";
import ControlPanelTemplate from "../../templates/ControlPanelTemplate";
import { getGroupFormList } from "../../../api/api";
import GroupNameFormList from "../../organisms/group/GroupNameFormList";
import LinearLoading from "../../molecules/LinearLoading";

const GroupNameForm = (): JSX.Element => {
  const auth = useAuth();
  const params: { groupName: string } = useParams();
  const { groupName } = params;
  return (
    <ControlPanelTemplate page={Pages.groupNameForm}>
      <GroupNameFormList
        item={auth.user?.group?.[groupName]?.formList}
        load={() => {
          getGroupFormList(params.groupName).then((result) =>
            auth?.setUser({
              ...auth?.user,
              group: {
                [groupName]: {
                  ...auth.user?.group?.[groupName],
                  formList: result.data.form,
                },
              },
            })
          );
        }}
        groupName={groupName}
        LoadComponent={<LinearLoading />}
      />
    </ControlPanelTemplate>
  );
};

export default GroupNameForm;
