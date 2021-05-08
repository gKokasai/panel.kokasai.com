import React, { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { checkSession, useAuth } from '../../contexts/UserContext';
import PasswordRequestForm from '../organisms/login/PasswordRequestForm';
import LoginForm from '../organisms/login/LoginForm';
import Loading from '../organisms/login/Loading';

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
    auth.setUser({ ...auth.user, inputPassWord: event.target.value, postedId: true });
  };

  const handleLoginFormSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
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
      if (!auth.user?.isLoggedIn && !auth.user?.isFailSessionLogin) {
        checkSession(auth);
      }
    },
  );
  if (auth.user?.isLoading === true) {
    return (
      <Loading />
    );
  } if (auth.user?.postedId === undefined || auth.user?.postedId === false) {
    return (
      <PasswordRequestForm
        handleIdForm={handleIdForm}
        isEnableSendButton={isEnableSendButton}
      />
    );
  } if (auth.user?.isLoggedIn) {
    return (
      <Redirect to="/Index" />
    );
  }
  return (
    <LoginForm
      handleLoginFormSubmit={handleLoginFormSubmit}
      handleIdForm={handleIdForm}
      handlePassWordForm={handlePassWordForm}
      defaultId={auth.user.inputId}
    />
  );
};
export default Login;
