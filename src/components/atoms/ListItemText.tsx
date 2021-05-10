import { ListItemText as MuiListItemText, ListItemTextProps as MuiListItemTextActionProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiListItemTextActionProps & {children: ReactNode}

const ListItemText: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiListItemText {...props}>
      {children}
    </MuiListItemText>
  );
};
export default ListItemText;
