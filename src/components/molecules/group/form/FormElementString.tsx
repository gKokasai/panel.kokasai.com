import React from 'react';
import TextField from '../../../atoms/TextField';
import { FormDefineTypeString, FormSaveTypeString } from '../../../../api/dataType';

export type FormElementStringProps = FormDefineTypeString & FormSaveTypeString;

const FormElementString = (props: FormElementStringProps): JSX.Element => {
  const { content } = props;
  return (
    <TextField variant="outlined" fullWidth value={content} />
  );
};

export default FormElementString;
