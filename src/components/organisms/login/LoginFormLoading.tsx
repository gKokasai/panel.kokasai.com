import React, { FC } from "react";
import CircularProgress from "../../atoms/CircularProgress";
import LoginFormStyle from "./LoginForm.style";
import CardContent from "../../atoms/CardContent";
import LoginFormCard from "../../molecules/login/LoginFormCard";

const LoginFormLoading: FC = (): JSX.Element => {
  const classes = LoginFormStyle();
  return (
    <LoginFormCard>
      <CardContent className={classes.cardContent}>
        <CircularProgress className={classes.circularProgress} size="10" />
      </CardContent>
    </LoginFormCard>
  );
};

export default LoginFormLoading;
