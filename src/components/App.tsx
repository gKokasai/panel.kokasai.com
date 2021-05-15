import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect, RouteProps,
} from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import Document from './pages/Document';
import {
  AuthProvider, checkSession, isShowEmptyPanel, useAuth,
} from '../contexts/AuthContext';
import { Pages } from '../pages';
import Empty from './pages/Empty';
import Loading from './organisms/login/Loading';
import Group from './pages/Group';

const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  const auth = useAuth();
  if (!auth.user && !auth.request.isFailSessionLogin) {
    checkSession(auth);
    if (isShowEmptyPanel()) return <Empty />;
    return <Loading />;
  }
  if (auth.user) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
  const auth = useAuth();
  if (auth.user) {
    return <Redirect to="/" />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};

const App = (): JSX.Element => (
  <AuthProvider>
    <div className="app">
      <Router>
        <div>
          <Switch>
            <UnAuthRoute exact path="/login" component={Login} />
            <PrivateRoute exact path={Pages.index.href} component={Index} />
            <PrivateRoute exact path={Pages.document.href} component={Document} />
            <PrivateRoute exact path={Pages.group.href} component={Group} />
          </Switch>
        </div>
      </Router>
    </div>
  </AuthProvider>
);

export default App;
