import React, { FC } from 'react';
import CardHeader from '../../atoms/CardHeader';
import Card from '../../atoms/Card';
import LoginFormStyle from '../../organisms/login/LoginForm.style';

export type LoginFormCardProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginFormCard: FC<LoginFormCardProps> = (props) => {
  const { onSubmit, children } = props;
  const classes = LoginFormStyle();
  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmit}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        {children}
      </Card>
    </form>
  );
};

export default LoginFormCard;
