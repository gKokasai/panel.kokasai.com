import React, { ReactNode, useState } from 'react';
import * as api from '../api';

type User = {
  inputId?: string;
  inputPassWord?: string;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  postedId?: boolean;
  documentList?: [string];
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

function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  const useCtx = () => {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider] as const;
}

const [useAuth, SetAuthProvider] = createCtx<authContextType>();

const useAuthCtx = (): authContextType => {
  const [user, setUser] = useState<User | null>(null);

  const getToken = () => {
    const result = api.getToken(user?.inputId)
      .then(() => { setUser({ ...user, postedId: true }); })
      .catch((res) => { console.log(res); });
    console.log(result);
  };

  const login = () => {
    setUser({ ...user, isLoading: true });
    const result = api.login(user?.inputId, user?.inputPassWord)
      .then((res) => {
        setUser({ ...user, isLoading: false, isLoggedIn: true });
        console.log(res);
      })
      .catch((err) => { console.log(err); });
    console.log(result);
  };

  const logout = () => {
    setUser({ isLoading: true });
    const result = api.logout()
      .then(() => { setUser({ ...user, isLoading: false, isLoggedIn: false }); });
    console.log(result);
  };

  return {
    user, getToken, login, logout, setUser,
  };
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = useAuthCtx();
  return (
    <SetAuthProvider
      value={auth}
    >
      {children}
    </SetAuthProvider>
  );
};

export { useAuth, AuthProvider };
