import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import * as icons from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import { Pages } from '../../pages';

const NotFoundStyle = makeStyles((theme: Theme) => createStyles({
  container: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: 'calc(100% - 20px)',
    '@media(min-width: 420px)': {
      width: '400px',
    },
  },
  icon: {
    fontSize: '6rem',
  },
  title: {
    margin: `${theme.spacing(3)}px 0`,
  },
  button: {
    margin: `${theme.spacing(2)}px 0`,
    fontWeight: 600,
  },
  arrowBack: {
    paddingRight: `${theme.spacing(1)}px`,
  },
}));

const NotFound: FC = (): JSX.Element => {
  const classes = NotFoundStyle();
  const history = useHistory();
  return (
    <div className={classes.container}>
      <icons.MoodBad className={classes.icon} />
      <Typography variant="h3" align="center" className={classes.title}>
        404 Not Found
      </Typography>
      <Typography variant="body1" align="center">
        ページが見つかりませんでした
      </Typography>
      <Button onClick={() => history.push(Pages.index.href)} className={classes.button}>
        <icons.ArrowBack className={classes.arrowBack} />
        トップに戻る
      </Button>
    </div>
  );
};

export default NotFound;
