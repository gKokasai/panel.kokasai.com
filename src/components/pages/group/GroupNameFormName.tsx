import React, { ChangeEvent } from "react";
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
  const onChangeString = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.dataset);
  };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.dataset);
  };

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
        onChangeCheckbox={onChangeCheckbox}
        onChangeString={onChangeString}
      />
    </ControlPanelTemplate>
  );
};

export default GroupNameFormName;
