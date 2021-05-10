import React, { ReactNode, useState } from 'react';
import * as api from '../api/api';

type User = {
  inputId?: string;
  inputPassWord?: string;
  isFailSessionLogin?: boolean;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  postedId?: boolean;
  statusCode?: { [key: string]: number };
  documentList?: string[];
  groupList?: string[];
}

type authContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  getToken: () => void;
  login: () => void;
  logout: () => void;
}

type Props = {
  children: ReactNode;
}

const ShowEmptyPanelKey = 'show-empty-panel';

export const isShowEmptyPanel = (): boolean => localStorage.getItem(ShowEmptyPanelKey) != null;

const createCtx = <ContextType extends unknown>() => {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  const useCtx = () => {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider] as const;
};

const [useAuth, SetAuthProvider] = createCtx<authContextType>();

const useAuthCtx = (): authContextType => {
  const [user, setUser] = useState<User | null>(null);

  const getToken = () => {
    setUser({ ...user, isLoading: true });
    api.postLogin(user?.inputId)
      .then(() => { setUser({ ...user, postedId: true, isLoading: false }); })
      .catch(
        (err) => {
          setUser({ ...user, isLoading: false, statusCode: { login: err.response.status } });
        },
      );
  };

  const login = () => {
    setUser({ ...user, isLoading: true });
    api.postAuth(user?.inputId, user?.inputPassWord)
      .then((res) => {
        localStorage.setItem(ShowEmptyPanelKey, '');
        setUser({
          ...user, isLoading: false, isLoggedIn: true, statusCode: { login: res.status },
        });
      })
      .catch((err) => {
        localStorage.removeItem(ShowEmptyPanelKey);
        setUser({ ...user, isLoading: false, statusCode: { login: err.response.status } });
      });
  };

  const logout = () => {
    setUser({ isLoading: true });
    api.postLogout()
      .then(() => { setUser({ ...user, isLoading: false, isLoggedIn: false }); });
  };

  return {
    user, getToken, login, logout, setUser,
  };
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = useAuthCtx();
  return (
    <SetAuthProvider value={auth}>
      {children}
    </SetAuthProvider>
  );
};

const checkSession = (auth: authContextType): void => {
  api.getAuth().then((result) => {
    if (result.status === 200) {
      localStorage.setItem(ShowEmptyPanelKey, '');
      auth.setUser({ ...auth.user, isLoggedIn: true });
    }
  }).catch(() => {
    localStorage.removeItem(ShowEmptyPanelKey);
    auth.setUser({ ...auth.user, isFailSessionLogin: true });
  });
};

export { useAuth, AuthProvider, checkSession };
