import React, { FC, useState } from "react";
import { Add, Clear } from "@material-ui/icons";
import ListStyle from "../common/List.style";
import { UserList } from "../../../api/dataType";
import WithHeaderList from "../../molecules/WithHeaderList";
import LoadableItem from "../../molecules/LoadableItem";
import Button from "../../atoms/Button";
import MemberListContent from "../../molecules/group/member/MemberListContent";
import TextField from "../../atoms/TextField";
import { postGroupUserList } from "../../../api/api";
import { useAlert } from "../../../contexts/AlertContext";

export type GroupNameMemberListProps = {
  item?: UserList;
  load: () => void;
  LoadComponent: JSX.Element;
  groupName: string;
};

const GroupNameMemberList: FC<GroupNameMemberListProps> = (
  props
): JSX.Element => {
  const { item, load, LoadComponent, groupName } = props;
  const classes = ListStyle();
  const alert = useAlert();
  const [addMemberTextField, setAddMemberTextField] = useState<string>("");
  const [editedMemberList, setEditedMemberList] =
    useState<string[] | undefined>(undefined);
  const [displayTextField, setDisplayTextField] = useState(false);

  const onClickAddButton = () => {
    setDisplayTextField(true);
  };

  const onChangeTextField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddMemberTextField(event.target.value);
  };

  const onClickAddMemberButton = () => {
    setEditedMemberList(editedMemberList?.concat(addMemberTextField));
  };

  const onClickRemoveButton = (index: string) => {
    setEditedMemberList(editedMemberList?.filter((id) => id !== index));
  };

  const onClickSubmitButton = () => {
    if (item?.owner && item && editedMemberList) {
      postGroupUserList(groupName, {
        owner: item.owner,
        member: editedMemberList,
      })
        .then(() => {
          alert.info("メンバーが保存されました");
        })
        .catch((err) => {
          if (err.status === "403") {
            alert.error("権限がありません.");
          } else {
            alert.error("エラーが発生しました");
          }
        });
    }
  };

  return (
    <WithHeaderList title="メンバー一覧" listClassName={classes.list}>
      <Button color="primary" onClick={() => onClickAddButton()}>
        <Add />
      </Button>
      {/* eslint-disable-next-line consistent-return */}
      {(() => {
        if (displayTextField) {
          return (
            <>
              <TextField onChange={(event) => onChangeTextField(event)} />
              <Button color="inherit" onClick={onClickAddMemberButton}>
                追加する
              </Button>
              <Clear onClick={onClickAddButton} />
            </>
          );
        }
      })()}
      <LoadableItem<UserList>
        item={item}
        load={load}
        LoadComponent={LoadComponent}
        onComplete={(_item) => (
          <MemberListContent
            item={_item}
            editedMemberList={editedMemberList}
            setEditedMemberList={setEditedMemberList}
            onClickRemoveButton={onClickRemoveButton}
          />
        )}
      />
      <Button onClick={onClickSubmitButton} color="primary">
        保存する
      </Button>
    </WithHeaderList>
  );
};

export default GroupNameMemberList;
