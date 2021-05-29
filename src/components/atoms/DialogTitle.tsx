import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type DialogTitleProps = MuiDialogTitleProps;

const DialogTitle: FC<DialogTitleProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogTitle {...props} />
);

export default DialogTitle;
