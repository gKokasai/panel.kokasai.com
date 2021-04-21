import React, { FC } from 'react';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import * as api from '../../api';
import { useAuth } from '../../contexts/UserContext';

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
  if (auth.user?.isLoading === true) {
    return (
      <CircularProgress />
    );
  } if (auth.user?.postedId === undefined) {
    return (
      <form className="login" onSubmit={handleIdFormSubmit}>
        <TextField type="text" onChange={handleIdForm} />
        <Button onClick={handleIdFormSubmit} variant="contained" color="primary">メールを送る</Button>
      </form>
    );
  } if (isLoggedIn) {
    return (
      <Redirect to="/Account" />
    );
  }
  return (
    <form className="login">
      <TextField type="text" onChange={handleIdForm} defaultValue={auth.user?.inputId} />
      <TextField type="text" onChange={handlePassWordForm} />
      <Button onClick={handleLoginFormSubmit} variant="contained" color="primary">ログインする</Button>
    </form>
  );
};
export default Login;
