import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiButtonProps & {children: ReactNode}

const Button: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiButton {...props}>
      {children}
    </MuiButton>
  );
};
export default Button;
