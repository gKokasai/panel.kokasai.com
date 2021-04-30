import { CardContent as MuiCardContent, CardContentProps as MuiCardContentProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiCardContentProps & {children: ReactNode}

const CardContent: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiCardContent {...props}>
      {children}
    </MuiCardContent>
  );
};
export default CardContent;
