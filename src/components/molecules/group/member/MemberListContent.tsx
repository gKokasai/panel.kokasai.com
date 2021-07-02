import React, { FC, SetStateAction } from "react";
import { ListItem } from "@material-ui/core";
import { Clear, InsertEmoticon } from "@material-ui/icons";
import ListItemIcon from "../../../atoms/ListItemIcon";
import ListItemText from "../../../atoms/ListItemText";
import { UserList } from "../../../../api/dataType";
import Button from "../../../atoms/Button";

export type MemberListContentProps = {
  item: UserList;
  editedMemberList: string[] | undefined;
  setEditedMemberList: React.Dispatch<SetStateAction<string[] | undefined>>;
  onClickRemoveButton: (index: string) => void;
};

const MemberListContent: FC<MemberListContentProps> = (props): JSX.Element => {
  const { item, editedMemberList, setEditedMemberList, onClickRemoveButton } =
    props;
  if (!editedMemberList) {
    setEditedMemberList(item.member);
  }
  return (
    <>
      {editedMemberList?.map((id) => (
        <ListItem>
          <ListItemIcon>
            <InsertEmoticon />
          </ListItemIcon>
          <ListItemText>{id}</ListItemText>
          <Button onClick={() => onClickRemoveButton(id)} key={id}>
            <Clear />
          </Button>
        </ListItem>
      ))}
    </>
  );
};

export default MemberListContent;
