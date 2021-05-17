import React, { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { checkSession, useAuth } from '../../contexts/AuthContext';
import PasswordRequestForm from '../organisms/login/PasswordRequestForm';
import LoginForm from '../organisms/login/LoginForm';
import Loading from '../organisms/login/Loading';

const Login: FC = () => {
  const auth = useAuth();

  const [isEnableSendButton, setIsEnableSendButton] = useState(false);

  const handleIdForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    auth.setRequest({ ...auth.request, inputId: event.target.value });
  };

  useEffect(
    () => {
      const pattern = /^((m\d{2}1)|(e\d{2}2)|(j\d{2}3)|(k\d{2}4)|(c\d{2}5)|(ap\d{2}8)|(ae\d{2}9))\d{2}$/;
      setIsEnableSendButton(!!auth.request.inputId?.match(pattern));
    }, [auth.request.inputId],
  );

  const handlePassWordForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    auth.setRequest({ ...auth.request, inputPassWord: event.target.value, isRequestPassword: true });
  };

  const handleLoginFormSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    auth.setRequest(
      {
        ...auth.request,
        inputPassWord: auth.request.inputPassWord?.trim(),
        inputId: auth.request.inputPassWord?.trim(),
        isLoad: true,
      },
    );
    auth.postAuth();
  };

  useEffect(
    () => {
      if (!auth.user && !auth.request.isFailSessionLogin) {
        checkSession(auth);
      }
    }, [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  if (auth.request.isLoad === true) {
    return (
      <Loading />
    );
  }
  if (!auth.request.isRequestPassword) {
    return (
      <PasswordRequestForm
        handleIdForm={handleIdForm}
        isEnableSendButton={isEnableSendButton}
      />
    );
  }
  if (auth.user) {
    return (
      <Redirect to="/Index" />
    );
  }
  return (
    <LoginForm
      handleLoginFormSubmit={handleLoginFormSubmit}
      handleIdForm={handleIdForm}
      handlePassWordForm={handlePassWordForm}
      defaultId={auth.request.inputId}
    />
  );
};
export default Login;
