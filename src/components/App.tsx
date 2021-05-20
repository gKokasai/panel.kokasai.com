import React, { FC } from 'react';
import {
  BrowserRouter, Switch, Route as DOMRoute, Redirect, RouteProps,
} from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import Document from './pages/document/Document';
import {
  AuthProvider, checkSession, useAuth,
} from '../contexts/AuthContext';
import { Pages } from '../pages';
import Empty from './pages/Empty';
import LoginFormLoading from './organisms/login/LoginFormLoading';
import Group from './pages/group/Group';
import { getSessionId } from '../storage';
import GroupName from './pages/group/GroupName';
import GroupNameForm from './pages/group/GroupNameForm';
import GroupNameFormName from './pages/group/GroupNameFormName';
import NotFound from './pages/NotFound';
import { AlertProvider } from '../contexts/AlertContext';
import DocumentName from './pages/document/DocumentName';

const Route: FC<RouteProps> = (props) => {
  const auth = useAuth();
  if (!auth.user && !auth.request.isFailSessionLogin) {
    checkSession(auth);
    if (getSessionId() != null) return <Empty />;
    return <LoginFormLoading />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DOMRoute {...props} />;
};

const PrivateRoute: FC<RouteProps> = (props) => {
  const auth = useAuth();
  if (auth.user) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...props} />;
  }
  return <Redirect to={Pages.login.href} />;
};

const UnAuthRoute: FC<RouteProps> = (props) => {
  const auth = useAuth();
  if (auth.user) {
    return <Redirect to={Pages.index.href} />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};

const App = (): JSX.Element => (
  <AlertProvider>
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <div>
            <Switch>
              <UnAuthRoute exact path={Pages.login.href} component={Login} />
              <PrivateRoute exact path={Pages.index.href} component={Index} />
              <PrivateRoute exact path={Pages.document.href} component={Document} />
              <PrivateRoute exact path={Pages.documentName.href} component={DocumentName} />
              <PrivateRoute exact path={Pages.group.href} component={Group} />
              <PrivateRoute exact path={Pages.groupName.href(':groupName')} component={GroupName} />
              <PrivateRoute exact path={Pages.groupNameForm.href(':groupName')} component={GroupNameForm} />
              <PrivateRoute exact path={Pages.groupNameFormName.href(':groupName', ':formName')} component={GroupNameFormName} />
              <PrivateRoute exact component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </AuthProvider>
  </AlertProvider>
);

export default App;
