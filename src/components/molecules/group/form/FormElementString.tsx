import React, { ChangeEvent } from "react";
import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "../../../atoms/TextField";
import {
  FormDefineTypeString,
  FormSaveTypeString,
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
    onChangeString: (event: ChangeEvent<HTMLInputElement>) => void;
    itemId?: string;
  };

const FormElementString = (props: FormElementStringProps): JSX.Element => {
  const { content, onChangeString, itemId } = props;
  const classes = FormElementStringStyle();
  return (
    <TextField
      variant="outlined"
      fullWidth
      defaultValue={content}
      className={classes.field}
      onChange={onChangeString}
      inputProps={{
        "data-itemName": itemId,
      }}
    />
  );
};

export default FormElementString;
