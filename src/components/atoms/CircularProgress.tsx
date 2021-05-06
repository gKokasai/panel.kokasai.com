import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiCircularProgressProps;

const CircularProgress: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCircularProgress {...props} />
);
export default CircularProgress;
