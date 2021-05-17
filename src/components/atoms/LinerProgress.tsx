import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiLinearProgressProps;

const LinearProgress: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiLinearProgress {...props} />
);
export default LinearProgress;
