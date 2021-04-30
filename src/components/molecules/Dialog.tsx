import { Dialog as MuiDialog, DialogProps as MuiCardActionProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiCardActionProps & {children: ReactNode}

const Dialog: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialog {...props}>
      {children}
    </MuiDialog>
  );
};
export default Dialog;
