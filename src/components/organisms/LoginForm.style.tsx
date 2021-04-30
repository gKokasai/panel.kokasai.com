import { createStyles, makeStyles, Theme } from '@material-ui/core';

const LoginFormStyle = makeStyles((theme: Theme) => createStyles({
  container: {
    '@media(min-width: 420px)': {
      width: 400,
    },
    margin: `${theme.spacing(0)} auto`,
  },
  button: {
    width: `calc(50% - ${theme.spacing(1)}px)`,
    height: 42,
  },
  header: {
    textAlign: 'center',
    background: '#212121',
    color: '#fff',
  },
  card: {
    marginTop: theme.spacing(10),
  },
  cardActions: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default LoginFormStyle;
