import React, { FC } from 'react';

import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import CardActions from '../../molecules/CardActions';
import CardContent from '../../molecules/CardContent';
import CardHeader from '../../molecules/CardHeader';
import TextField from '../../atoms/TextField';

import { useAuth } from '../../../contexts/AuthContext';
import LoginFormStyle from './LoginForm.style';

type Props = {
  handleLoginFormSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleIdForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassWordForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultId?: string;
}
const LoginForm: FC<Props> = (props): JSX.Element => {
  const auth = useAuth();
  const {
    handleLoginFormSubmit, handleIdForm, handlePassWordForm, defaultId,
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
            onClick={() => { auth.setRequest({ ...auth.request, isRequestPassword: false }); }}
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
