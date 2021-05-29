import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type LinearProgressProps = MuiLinearProgressProps;

const LinearProgress: FC<LinearProgressProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiLinearProgress {...props} />
);

export default LinearProgress;
