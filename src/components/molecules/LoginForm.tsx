import React, { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader, createStyles,
  makeStyles,
  TextField, Theme,
  Link,
} from '@material-ui/core';
import { useAuth } from '../../contexts/UserContext';

type Props = {
  handleLoginFormSubmit: any;
  handleIdForm: any;
  handlePassWordForm: any;
  defaultId?: string;
}
const LoginForm: FC<Props> = (props): JSX.Element => {
  const auth = useAuth();
  const {
    handleLoginFormSubmit, handleIdForm, handlePassWordForm, defaultId,
  } = props;
  const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
    },
    card: {
      marginTop: theme.spacing(10),
    },
  }));

  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className="classes.header" title="Login" />
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
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLoginFormSubmit}
          >
            ログイン
          </Button>
          <Link onClick={() => { auth.setUser({ ...auth.user, postedId: false }); }}>メール送信にもどる</Link>
        </CardActions>
      </Card>
    </form>
  );
};

export default LoginForm;
