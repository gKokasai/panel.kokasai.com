import React, { FC } from 'react';
import CircularProgress from '../atoms/CircularProgress';
import LoginFormStyle from './LoginForm.style';
import Card from '../molecules/Card';
import CardHeader from '../molecules/CardHeader';
import CardContent from '../molecules/CardContent';

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
