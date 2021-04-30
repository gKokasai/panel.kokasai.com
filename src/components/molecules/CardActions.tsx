import { CardActions as MuiCardActions, CardActionsProps as MuiCardActionProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiCardActionProps & {children: ReactNode}

const CardActions: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiCardActions {...props}>
      {children}
    </MuiCardActions>
  );
};
export default CardActions;
