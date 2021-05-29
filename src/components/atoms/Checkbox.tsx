import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@material-ui/core";
import React, { FC } from "react";

export type CheckboxProps = MuiCheckboxProps;

const Checkbox: FC<CheckboxProps> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCheckbox {...props} />
);

export default Checkbox;
