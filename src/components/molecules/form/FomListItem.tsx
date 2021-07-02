import React, { FC } from "react";
import { ListItem } from "@material-ui/core";
import { FormatAlignRight } from "@material-ui/icons";
import { Pages } from "../../../pages";
import ListItemIcon from "../../atoms/ListItemIcon";
import ListItemText from "../../atoms/ListItemText";
import InternalLink from "../InternalLink";
import { FormList } from "../../../api/dataType";

export type FormListItemProps = {
  groupName: string;
  formName: string;
  formList: FormList;
  namePrefix?: string;
};

const FormListItem: FC<FormListItemProps> = (props) => {
  const { groupName, formName, formList, namePrefix } = props;
  const form = formList[formName];
  return (
    <InternalLink to={Pages.groupNameFormName.href(groupName, formName)}>
      <ListItem>
        <ListItemIcon>
          <FormatAlignRight />
        </ListItemIcon>
        <ListItemText>
          {namePrefix}
          {form.name}
        </ListItemText>
      </ListItem>
    </InternalLink>
  );
};

export default FormListItem;
