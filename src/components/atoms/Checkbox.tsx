import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiCheckboxProps;

const Checkbox: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiCheckbox {...props} />
);
export default Checkbox;
