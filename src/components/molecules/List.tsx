import { List as MuiList, ListProps as MuiListActionProps } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type Props = MuiListActionProps & {children: ReactNode}

const List: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiList {...props}>
      {children}
    </MuiList>
  );
};
export default List;
