import React, { FC } from 'react';
import CircularProgress from '../../atoms/CircularProgress';
import LoginFormStyle from './LoginForm.style';
import Card from '../../atoms/Card';
import CardHeader from '../../atoms/CardHeader';
import CardContent from '../../atoms/CardContent';

const Loading: FC = (): JSX.Element => {
  const classes = LoginFormStyle();
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent className={classes.cardContent}>
          <CircularProgress className={classes.circularProgress} size="10" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Loading;
