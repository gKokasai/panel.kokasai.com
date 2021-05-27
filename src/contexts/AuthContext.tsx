import React, { useState } from 'react';
import * as api from '../api/api';
import { User } from './User';
import { Request } from './Request';
import { setSessionId } from '../storage';
import createContext from './createContext';
import { useAlert } from './AlertContext';

type AuthContextType = {
  request: Request;
  setRequest: React.Dispatch<React.SetStateAction<Request>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  reloadUser: () => void;
  postLogin: () => void;
  postAuth: () => void;
  postLogout: () => void;
}

const [useAuth, SetAuthProvider] = createContext<AuthContextType>();

const useAuthContext = (): AuthContextType => {
  const [request, setRequest] = useState<Request>({});
  const [user, setUser] = useState<User | null>(null);
  const alert = useAlert();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const reloadUser = () => {};

  const postLogin = () => {
    setRequest({ ...request, isLoad: true });
    api.postLogin(request.inputId)
      .then(() => {
        setRequest({ ...request, isRequestPassword: true, isLoad: false });
        alert.success('メールが送信されました');
      })
      .catch(() => {
        setRequest({ ...request, isLoad: false });
        alert.error('メール送信に失敗しました');
      });
  };

  const postAuth = () => {
    setRequest({ ...request, isLoad: true });
    api.postAuth(request.inputId, request.inputPassWord)
      .then((response) => {
        setRequest({ ...request, isLoad: false });
        setUser({});
        setSessionId(response.headers.session);
        reloadUser();
        alert.info(`${request.inputId} としてログインしました`);
      })
      .catch(() => {
        setRequest({ ...request, isLoad: false });
        setSessionId(null);
        alert.error('ログインに失敗しました');
      });
  };

  const postLogout = () => {
    setRequest({ isLoad: true });
    api.postLogout()
      .then(() => {
        setRequest({ ...request, isLoad: false });
        setUser(null);
        setSessionId(null);
      });
  };

  return {
    request, setRequest, user, setUser, reloadUser, postLogin, postAuth, postLogout,
  };
};

const AuthProvider: React.FC = (props) => {
  const { children } = props;
  const auth = useAuthContext();
  return (
    <SetAuthProvider value={auth}>
      {children}
    </SetAuthProvider>
  );
};

const checkSession = (auth: AuthContextType): void => {
  api.getAuth().then((result) => {
    if (result.status === 200) {
      auth.setUser({});
      auth.reloadUser();
    }
  }).catch(() => {
    auth.setRequest({ ...auth.request, isFailSessionLogin: true });
  });
};

export { useAuth, AuthProvider, checkSession };
