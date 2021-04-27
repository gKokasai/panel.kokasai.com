import React, { FC, useEffect, useState } from 'react';
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

  const [isEnableSendButton, setIsEnableSendButton] = useState(false);

  const handleIdForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    auth.setUser({ ...auth.user, inputId: event.target.value });
  };

  useEffect(
    () => {
      const pattern = /^((m\d{2}1)|(e\d{2}2)|(j\d{2}3)|(k\d{2}4)|(c\d{2}5)|(ap\d{2}8)|(ae\d{2}9))\d{2}$/;
      setIsEnableSendButton(!!auth.user?.inputId?.match(pattern));
    }, [auth.user?.inputId],
  );

  const handlePassWordForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    console.log(event.target.value);
    auth.setUser({ ...auth.user, inputPassWord: event.target.value, postedId: true });
  };

  const handleLoginFormSubmit = (event: any): void => {
    event.preventDefault();
    auth.setUser(
      {
        ...auth.user,
        inputPassWord: auth.user?.inputPassWord?.trim(),
        inputId: auth.user?.inputPassWord?.trim(),
        isLoading: true,
      },
    );
    auth.login();
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
      <IdForm
        handleIdForm={handleIdForm}
        isEnableSendButton={isEnableSendButton}
      />
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
