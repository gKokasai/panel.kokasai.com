import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import ControlPanelTemplate from "../../templates/ControlPanelTemplate";
import { Pages } from "../../../pages";
import GroupNameMemberList from "../../organisms/group/GroupNameMemberList";
import { getGroupUserList } from "../../../api/api";
import LinearLoading from "../../molecules/LinearLoading";

const GroupNameMember = (): JSX.Element => {
  const auth = useAuth();
  const params: { groupName: string } = useParams();
  const { groupName } = params;

  return (
    <ControlPanelTemplate page={Pages.groupNameMember}>
      <GroupNameMemberList
        item={auth.user?.group?.[groupName]?.userList}
        load={() => {
          getGroupUserList(groupName).then((response) => {
            auth.setUser({
              ...auth?.user,
              group: {
                [groupName]: {
                  ...auth.user?.group?.[groupName],
                  userList: response.data,
                },
              },
            });
          });
        }}
        LoadComponent={<LinearLoading />}
        groupName={groupName}
      />
    </ControlPanelTemplate>
  );
};

export default GroupNameMember;
