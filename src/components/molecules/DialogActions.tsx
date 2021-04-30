import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiDialogActionsProps;

const DialogActions: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiDialogActions {...props} />
);
export default DialogActions;
