import React, { FC, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import {
  GetGroupFormResponse,
  PostGroupFormSubmitRequest,
} from "../../../api/dataType";
import LoadableItem from "../../molecules/LoadableItem";
import FormContent from "../../molecules/group/form/FormContent";
import { postGroupFormSubmit } from "../../../api/api";
import { useAlert } from "../../../contexts/AlertContext";

const GroupNameFormContentStyle = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      margin: "0 auto",
      "@media(min-width: 820px)": {
        width: 800,
      },
    },
    formHeader: {
      paddingBottom: `${theme.spacing(2)}px`,
    },
    formElement: {
      padding: `${theme.spacing(1)}px`,
    },
    paddingTop1: {
      paddingTop: `${theme.spacing(1)}px`,
    },
  })
);

export type GroupNameFormContentProps = {
  formName: string;
  groupName: string;
  item?: GetGroupFormResponse;
  load: () => void;
  LoadComponent: JSX.Element;
};

const GroupNameFormContent: FC<GroupNameFormContentProps> = (
  props
): JSX.Element => {
  const { formName, load, item, LoadComponent, groupName } = props;
  const [editedForm, setEditedForm] =
    useState<PostGroupFormSubmitRequest | undefined>(undefined);
  const [isEnableButton, setIsEnableButton] = useState(true);
  const classes = GroupNameFormContentStyle();
  const alert = useAlert();
  const onClickSubmitButton = () => {
    if (editedForm) {
      setIsEnableButton(false);
      postGroupFormSubmit(groupName, formName, editedForm).then(() => {
        setIsEnableButton(true);
        alert.success("フォームが保存されました");
      });
    }
  };

  return (
    <div>
      <LoadableItem<GetGroupFormResponse>
        item={item}
        load={load}
        LoadComponent={LoadComponent}
        onComplete={(_item) => (
          <FormContent
            item={_item}
            editedForm={editedForm}
            setEditedForm={setEditedForm}
            onClickSubmitButton={onClickSubmitButton}
            classes={classes}
            isEnableButton={isEnableButton}
          />
        )}
      />
    </div>
  );
};

export default GroupNameFormContent;
