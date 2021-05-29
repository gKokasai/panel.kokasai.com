import React, { FC } from "react";
import TextField, { TextFieldProps } from "../../atoms/TextField";

export type StudentNumberTextFieldProps = TextFieldProps;

const StudentNumberTextField: FC<StudentNumberTextFieldProps> = (
  props
): JSX.Element => (
  <TextField
    fullWidth
    type="email"
    label="学籍番号"
    placeholder="アルファベットから始まる学籍番号"
    margin="normal"
    {...props} /* eslint-disable-line react/jsx-props-no-spreading */
  />
);

export default StudentNumberTextField;
