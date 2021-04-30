import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiDialogContentProps;

const DialogContent: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogContent {...props} />
);
export default DialogContent;
