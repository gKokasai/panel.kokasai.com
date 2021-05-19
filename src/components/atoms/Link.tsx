import { Link as MuiLink, LinkProps as MuiLinkActionProps } from '@material-ui/core';
import React, { FC } from 'react';

export type Props = MuiLinkActionProps

const Link: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiLink {...props}>
      {children}
    </MuiLink>
  );
};
export default Link;
