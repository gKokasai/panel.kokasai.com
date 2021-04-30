import {
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiDialogContentTextProps;

const DialogContentText: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogContentText {...props} />
);
export default DialogContentText;
