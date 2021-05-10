import { ListItemIcon as MuiListItemIcon, ListItemIconProps as MuiListItemIconActionProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiListItemIconActionProps & {children: ReactNode}

const ListItemIcon: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiListItemIcon {...props}>
      {children}
    </MuiListItemIcon>
  );
};
export default ListItemIcon;
