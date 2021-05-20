import { ListItemIcon as MuiListItemIcon, ListItemIconProps as MuiListItemIconActionProps } from '@material-ui/core';
import React, { FC } from 'react';

export type ListItemIconProps = MuiListItemIconActionProps;

const ListItemIcon: FC<ListItemIconProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiListItemIcon {...props} />
);

export default ListItemIcon;
