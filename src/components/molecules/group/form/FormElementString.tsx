import React from 'react';
import TextField from '../../../atoms/TextField';
import { FormDefineTypeString } from '../../../../api/dataType';

export type FormElementStringProps = FormDefineTypeString;

const FormElementString = (_: FormElementStringProps): JSX.Element => (
  <TextField variant="outlined" fullWidth />
);

export default FormElementString;
