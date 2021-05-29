import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type ButtonProps = MuiButtonProps;

const Button: FC<ButtonProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiButton {...props} />
);

export default Button;
