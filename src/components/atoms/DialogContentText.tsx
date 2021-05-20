import { DialogContentText as MuiDialogContentText, DialogContentTextProps as MuiDialogContentTextProps } from '@material-ui/core';
import React, { FC } from 'react';

export type DialogContentTextProps = MuiDialogContentTextProps;

const DialogContentText: FC<DialogContentTextProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogContentText {...props} />
);

export default DialogContentText;
