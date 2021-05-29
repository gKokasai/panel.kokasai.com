import {
  Dialog as MuiDialog,
  DialogProps as MuiCardActionProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type DialogProps = MuiCardActionProps;

const Dialog: FC<DialogProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialog {...props} />
);

export default Dialog;
