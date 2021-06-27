import React, { ChangeEvent } from "react";
import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "../../../atoms/TextField";
import {
  FormDefineTypeString,
  FormSaveTypeString,
  PostGroupFormSubmitRequest,
} from "../../../../api/dataType";

const FormElementStringStyle = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      padding: `${theme.spacing(1)}px 0`,
    },
  })
);

export type FormElementStringProps = FormDefineTypeString &
  FormSaveTypeString & {
    itemId?: string;
    editedForm?: PostGroupFormSubmitRequest;
    setEditedForm: React.Dispatch<
      React.SetStateAction<PostGroupFormSubmitRequest | undefined>
    >;
  };

const FormElementString = (props: FormElementStringProps): JSX.Element => {
  const { content, itemId, editedForm, setEditedForm } = props;
  const classes = FormElementStringStyle();
  const onChangeString = (event: ChangeEvent<HTMLInputElement>) => {
    const targetItemId: string | undefined = event.target.dataset.itemid;
    if (!targetItemId) return;
    const parsedTargetItemId: number = parseInt(targetItemId, 10);
    setEditedForm({
      values: {
        ...editedForm?.values,
        [parsedTargetItemId]: ["string", { content: event.target.value }],
      },
    });
  };
  return (
    <TextField
      variant="outlined"
      fullWidth
      defaultValue={content}
      className={classes.field}
      onChange={onChangeString}
      inputProps={{
        "data-itemId": itemId,
      }}
    />
  );
};

export default FormElementString;
