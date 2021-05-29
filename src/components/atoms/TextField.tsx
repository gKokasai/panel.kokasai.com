import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type TextFieldProps = MuiTextFieldProps;

const TextField: FC<TextFieldProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiTextField {...props} />
);

export default TextField;
