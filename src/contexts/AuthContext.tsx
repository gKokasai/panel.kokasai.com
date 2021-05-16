import React, { ReactNode, useState } from 'react';
import * as api from '../api/api';
import { User } from './User';
import { Request } from './Request';
import { setSessionId } from '../storage';
import { getUserDocumentList, getUserGroupList } from '../api/api';

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

  const reloadUser = () => {
    Promise.all(
      [
        getUserDocumentList(),
        getUserGroupList(),
      ],
    ).then(([
      documentResponse,
      groupResponse,
    ]) => {
      setUser({
        documentList: documentResponse.data.document,
        groupList: groupResponse.data.group,
      });
    });
  };

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
        setRequest({ ...request, isLoad: false });
        setUser({});
        setSessionId(response.headers.session);
        reloadUser();
      })
      .catch(() => {
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
    request, setRequest, user, setUser, reloadUser, postLogin, postAuth, postLogout,
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
      auth.setUser({});
      auth.reloadUser();
    }
  }).catch(() => {
    auth.setRequest({ ...auth.request, isFailSessionLogin: true });
  });
};

export { useAuth, AuthProvider, checkSession };
