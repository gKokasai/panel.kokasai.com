import React, { FC } from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import CardActions from '../../atoms/CardActions';
import CardContent from '../../atoms/CardContent';
import CardHeader from '../../atoms/CardHeader';
import TextField from '../../atoms/TextField';
import LoginFormStyle from './LoginForm.style';

export type LoginFormProps = {
  handleLoginFormSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleIdForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassWordForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleReturnToIdForm: () => void;
  defaultId?: string;
}

const LoginForm: FC<LoginFormProps> = (props): JSX.Element => {
  const {
    handleLoginFormSubmit, handleIdForm, handlePassWordForm, handleReturnToIdForm, defaultId,
  } = props;

  const classes = LoginFormStyle();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              type="email"
              label="学籍番号"
              placeholder="アルファベットから始まる学籍番号"
              margin="normal"
              defaultValue={defaultId}
              onChange={handleIdForm}
            />
            <TextField
              fullWidth
              type="email"
              label="パスワード"
              margin="normal"
              onChange={handlePassWordForm}
            />
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.button}
            onClick={handleReturnToIdForm}
          >
            メール送信にもどる
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.button}
            onClick={handleLoginFormSubmit}
          >
            ログイン
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default LoginForm;
