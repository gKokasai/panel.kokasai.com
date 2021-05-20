import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import PasswordRequestForm from '../organisms/login/PasswordRequestForm';
import LoginForm from '../organisms/login/LoginForm';
import LoginFormLoading from '../organisms/login/LoginFormLoading';
import { Pages } from '../../pages';

const Login: FC = () => {
  const auth = useAuth();

  const onChangeStudentNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    auth.setRequest({ ...auth.request, inputId: event.target.value });
  };

  if (auth.request.isLoad === true) {
    return (
      <LoginFormLoading />
    );
  }
  if (!auth.request.isRequestPassword) {
    return (
      <PasswordRequestForm
        onChangeStudentNumber={onChangeStudentNumber}
        onSubmitPasswordRequestForm={auth.postLogin}
        onClickForwardButton={() => auth.setRequest({ ...auth.request, isRequestPassword: true })}
        id={auth.request.inputId}
      />
    );
  }
  if (auth.user) {
    return (
      <Redirect to={Pages.index.href} />
    );
  }
  return (
    <LoginForm
      onSubmitForm={() => {
        auth.setRequest({
          ...auth.request,
          inputPassWord: auth.request.inputPassWord?.trim(),
          inputId: auth.request.inputPassWord?.trim(),
          isLoad: true,
        });
        auth.postAuth();
      }}
      onChangeStudentNumber={onChangeStudentNumber}
      onChangePassword={(event) => auth.setRequest({ ...auth.request, inputPassWord: event.target.value })}
      id={auth.request.inputId}
      onClickBackButton={() => auth.setRequest({ ...auth.request, isRequestPassword: false })}
    />
  );
};

export default Login;
