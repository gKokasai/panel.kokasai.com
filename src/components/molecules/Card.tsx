import { Card as MuiCard, CardProps as MuiCardActionProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiCardActionProps & {children: ReactNode}

const Card: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiCard {...props}>
      {children}
    </MuiCard>
  );
};
export default Card;
