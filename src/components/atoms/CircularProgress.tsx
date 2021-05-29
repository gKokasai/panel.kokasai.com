import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type CircularProgressProps = MuiCircularProgressProps;

const CircularProgress: FC<CircularProgressProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCircularProgress {...props} />
);

export default CircularProgress;
