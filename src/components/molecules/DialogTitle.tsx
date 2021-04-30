import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiDialogTitleProps;

const DialogTitle: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogTitle {...props} />
);
export default DialogTitle;
