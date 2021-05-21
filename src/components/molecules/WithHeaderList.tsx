import React, { FC, ReactNode } from 'react';
import Typography from '../atoms/Typography';
import List from '../atoms/List';

export type WithHeaderListProps = {
  title: string,
  listClassName?: string,
  headerClassName?: string,
  children: ReactNode,
}

const WithHeaderList: FC<WithHeaderListProps> = (props): JSX.Element => {
  const {
    title, listClassName, headerClassName, children,
  } = props;
  return (
    <List className={listClassName}>
      <Typography variant="h6" className={headerClassName}>
        {title}
      </Typography>
      {children}
    </List>
  );
};

export default WithHeaderList;
