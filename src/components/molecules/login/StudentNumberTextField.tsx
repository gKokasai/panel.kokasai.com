import React, { FC } from "react";
import TextField, { TextFieldProps } from "../../atoms/TextField";

export type StudentNumberTextFieldProps = TextFieldProps & {
  inputId?: string;
  enableSendButton?: boolean;
};

const StudentNumberTextField: FC<StudentNumberTextFieldProps> = (
  props
): JSX.Element => {
  const { inputId, enableSendButton } = props;
  const displayHelperMessage = enableSendButton && !!inputId;
  return (
    <TextField
      fullWidth
      type="email"
      label="学籍番号"
      placeholder="アルファベットから始まる学籍番号"
      margin="normal"
      error={displayHelperMessage}
      helperText={
        displayHelperMessage
          ? "アルファベットから始まる学籍番号を入力してください"
          : ""
      }
      {...props} /* eslint-disable-line react/jsx-props-no-spreading */
    />
  );
};

export default StudentNumberTextField;
