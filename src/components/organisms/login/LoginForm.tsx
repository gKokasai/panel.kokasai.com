import React, { FC } from "react";
import Button from "../../atoms/Button";
import CardActions from "../../atoms/CardActions";
import CardContent from "../../atoms/CardContent";
import LoginFormStyle from "./LoginForm.style";
import StudentNumberTextField from "../../molecules/login/StudentNumberTextField";
import PasswordTextField from "../../molecules/login/PasswordTextField";
import LoginFormCard from "../../molecules/login/LoginFormCard";

export type LoginFormProps = {
  onSubmitForm: () => void;
  onChangeStudentNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickBackButton: () => void;
  id?: string;
};

const LoginForm: FC<LoginFormProps> = (props): JSX.Element => {
  const {
    onSubmitForm,
    onChangeStudentNumber,
    onChangePassword,
    onClickBackButton,
    id,
  } = props;
  const classes = LoginFormStyle();
  return (
    <LoginFormCard
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm();
      }}
    >
      <CardContent>
        <div>
          <StudentNumberTextField onChange={onChangeStudentNumber} value={id} />
          <PasswordTextField onChange={onChangePassword} />
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button} onClick={onClickBackButton}>
          メール送信にもどる
        </Button>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={classes.button}
          onClick={(event) => {
            event.preventDefault();
            onSubmitForm();
          }}
        >
          ログイン
        </Button>
      </CardActions>
    </LoginFormCard>
  );
};

export default LoginForm;
