import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = MuiTextFieldProps;

const TextField: FC<Props> = (props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiTextField {...props} />
);
export default TextField;
