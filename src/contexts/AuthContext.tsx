import React, { ReactNode, useState } from 'react';
import * as api from '../api/api';
import { User } from './User';
import { Request } from './Request';
import { setSessionId, setShowEmptyPanel } from '../storage';

type AuthContextType = {
  request: Request;
  setRequest: React.Dispatch<React.SetStateAction<Request>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  postLogin: () => void;
  postAuth: () => void;
  postLogout: () => void;
}

type Props = {
  children: ReactNode;
}

const createContext = <ContextType extends unknown>() => {
  const context = React.createContext<ContextType | undefined>(undefined);
  const useContext = () => {
    const c = React.useContext(context);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useContext, context.Provider] as const;
};

const [useAuth, SetAuthProvider] = createContext<AuthContextType>();

const useAuthContext = (): AuthContextType => {
  const [request, setRequest] = useState<Request>({});
  const [user, setUser] = useState<User | null>(null);

  const postLogin = () => {
    setRequest({ ...request, isLoad: true });
    api.postLogin(request.inputId)
      .then(() => { setRequest({ ...request, isRequestPassword: true, isLoad: false }); })
      .catch(() => { setRequest({ ...request, isLoad: false }); });
  };

  const postAuth = () => {
    setRequest({ ...request, isLoad: true });
    api.postAuth(request.inputId, request.inputPassWord)
      .then((response) => {
        setShowEmptyPanel(true);
        setRequest({ ...request, isLoad: false });
        setUser({});
        setSessionId(response.headers.session);
      })
      .catch(() => {
        setShowEmptyPanel(false);
        setRequest({ ...request, isLoad: false });
        setSessionId(null);
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
    request, setRequest, user, setUser, postLogin, postAuth, postLogout,
  };
};

const AuthProvider: React.FC<Props> = ({ children }) => {
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
      setShowEmptyPanel(true);
      auth.setUser({});
    }
  }).catch(() => {
    setShowEmptyPanel(false);
    auth.setRequest({ ...auth.request, isFailSessionLogin: true });
  });
};

export { useAuth, AuthProvider, checkSession };
