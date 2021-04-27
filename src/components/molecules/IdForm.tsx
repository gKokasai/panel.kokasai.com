import React, { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader, createStyles, Link,
  makeStyles,
  TextField, Theme,
} from '@material-ui/core';

import { useAuth } from '../../contexts/UserContext';

type Props = {
  handleIdFormSubmit: any;
  handleIdForm: any;
}
const IdForm: FC<Props> = (props): JSX.Element => {
  const auth = useAuth();
  const { handleIdFormSubmit, handleIdForm } = props;
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
      textAlign: 'center',
      marginTop: theme.spacing(20),
      marginLeft: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleIdFormSubmit}>
      <Card className={classes.card}>
        <CardHeader className="classes.header" title="Login" />
        <CardContent>
          <TextField
            fullWidth
            type="email"
            label="学籍番号"
            placeholder="アルファベットから始まる学籍番号"
            margin="normal"
            onChange={handleIdForm}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleIdFormSubmit}
          >
            メール送信
          </Button>
          <Link
            onClick={() => { auth.setUser({ ...auth.user, postedId: true }); }}
          >
            既にパスワードを持っている方
          </Link>
        </CardActions>
      </Card>
    </form>
  );
};

export default IdForm;
