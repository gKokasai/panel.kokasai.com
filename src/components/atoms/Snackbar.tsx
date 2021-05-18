import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiSnackbarProps & {children: ReactNode}

const Snackbar: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiSnackbar {...props}>
      {children}
    </MuiSnackbar>
  );
};
export default Snackbar;
