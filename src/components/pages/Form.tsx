import React from "react";
import { ListItem } from "@material-ui/core";
import { FormatAlignRight } from "@material-ui/icons";
import { useAuth } from "../../contexts/AuthContext";
import { Pages } from "../../pages";
import ControlPanelTemplate from "../templates/ControlPanelTemplate";
import LinearLoading from "../molecules/LinearLoading";
import LoadableItem from "../molecules/LoadableItem";
import { FormList } from "../../api/dataType";
import InternalLink from "../molecules/InternalLink";
import ListItemIcon from "../atoms/ListItemIcon";
import ListItemText from "../atoms/ListItemText";
import WithHeaderList from "../molecules/WithHeaderList";
import ListStyle from "../organisms/common/List.style";
import { getUserFormList } from "../../api/api";

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
                <InternalLink
                  to={Pages.groupNameFormName.href(groupName, formName)}
                >
                  <ListItem>
                    <ListItemIcon>
                      <FormatAlignRight />
                    </ListItemIcon>
                    <ListItemText>
                      {groupName} - {formList[formName].name}
                    </ListItemText>
                  </ListItem>
                </InternalLink>
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
