import { CardHeader as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@material-ui/core';
import React, { FC } from 'react';

export type CardHeaderProps = MuiCardHeaderProps;

const CardHeader: FC<CardHeaderProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCardHeader {...props} />
);

export default CardHeader;
