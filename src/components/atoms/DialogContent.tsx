import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type DialogContentProps = MuiDialogContentProps;

const DialogContent: FC<DialogContentProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogContent {...props} />
);

export default DialogContent;
