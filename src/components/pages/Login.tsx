import React, { FC, useEffect } from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import * as api from '../../api';
import { useAuth } from '../../contexts/UserContext';
import IdForm from '../molecules/IdForm';
import LoginForm from '../molecules/LoginForm';

const Login: FC = () => {
  const auth = useAuth();
  const handleIdForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    console.log(event.target.value);
    auth.setUser({ ...auth.user, inputId: event.target.value });
  };

  const handlePassWordForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    console.log(event.target.value);
    auth.setUser({ ...auth.user, inputPassWord: event.target.value, postedId: true });
  };

  const handleLoginFormSubmit = (event: any): void => {
    event.preventDefault();
    auth.setUser({ ...auth.user, isLoading: true });
    auth.login();
  };

  const handleIdFormSubmit = (event: any): void => {
    event.preventDefault();
    auth.getToken();
  };

  useEffect(
    () => {
      let isLoggedIn = auth.user?.isLoggedIn === true;
      if (!isLoggedIn) {
        const cookie = document.cookie.split('; ').find((line: string) => line.startsWith('auth='));
        if (cookie) {
          const checkSession = async () => {
            const result = await api.getAuth(cookie);
            if (result.status === 200) {
              auth.setUser({ ...auth.user, isLoggedIn: true });
              isLoggedIn = true;
            } else if (result.status === 401) {
              document.cookie = 'auth=; max-age=0';
            }
          };
          checkSession();
        }
      }
    }, [],
  );
  if (auth.user?.isLoading === true) {
    return (
      <CircularProgress />
    );
  } if (auth.user?.postedId === undefined || auth.user?.postedId === false) {
    return (
      <IdForm handleIdForm={handleIdForm} handleIdFormSubmit={handleIdFormSubmit} />
    );
  } if (auth.user?.isLoggedIn) {
    return (
      <Redirect to="/Account" />
    );
  }
  return (
    <LoginForm
      handleIdForm={handleIdForm}
      handlePassWordForm={handlePassWordForm}
      handleLoginFormSubmit={handleLoginFormSubmit}
      defaultId={auth.user.inputId}
    />
  );
};
export default Login;
