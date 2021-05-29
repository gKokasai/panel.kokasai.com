import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type DialogActionsProps = MuiDialogActionsProps;

const DialogActions: FC<DialogActionsProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogActions {...props} />
);

export default DialogActions;
