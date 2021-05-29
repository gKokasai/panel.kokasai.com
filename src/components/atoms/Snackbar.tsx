import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type SnackbarProps = MuiSnackbarProps;

const Snackbar: FC<SnackbarProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiSnackbar {...props} />
);

export default Snackbar;
