import React, { FC } from 'react';
import TextField, { TextFieldProps } from '../../atoms/TextField';

export type PasswordTextFieldProps = TextFieldProps;

const PasswordTextField: FC<PasswordTextFieldProps> = (props) => (
  <TextField
    fullWidth
    type="email"
    label="パスワード"
    placeholder="メールに届いたパスワード"
    margin="normal"
    {...props /* eslint-disable-line react/jsx-props-no-spreading */}
  />
);

export default PasswordTextField;
