import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Pages } from "../../pages";
import ControlPanelTemplate from "../templates/ControlPanelTemplate";
import LinearLoading from "../molecules/LinearLoading";
import LoadableItem from "../molecules/LoadableItem";
import { FormList } from "../../api/dataType";
import WithHeaderList from "../molecules/WithHeaderList";
import ListStyle from "../organisms/common/List.style";
import { getUserFormList } from "../../api/api";
import FormListItem from "../molecules/form/FomListItem";

const Form = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  return (
    <ControlPanelTemplate page={Pages.groupNameForm}>
      <WithHeaderList title="フォーム一覧" listClassName={classes.list}>
        <LoadableItem<{ [groupName: string]: FormList }>
          item={auth.user?.formList}
          load={() => {
            getUserFormList().then((result) => {
              auth.setUser({
                ...auth.user,
                formList: result.data.group,
              });
            });
          }}
          onComplete={(_item) => {
            const keys = Object.entries(_item);
            return keys.flatMap(([groupName, formList]) =>
              Object.keys(formList).map((formName) => (
                <FormListItem
                  groupName={groupName}
                  formName={formName}
                  formList={formList}
                  namePrefix={`${groupName} - `}
                />
              ))
            );
          }}
          LoadComponent={<LinearLoading />}
        />
      </WithHeaderList>
    </ControlPanelTemplate>
  );
};

export default Form;
