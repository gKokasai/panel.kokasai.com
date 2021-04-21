import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect, RouteProps,
} from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider, useAuth } from '../contexts/UserContext';
import './App.scss';

const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  const auth = useAuth();
  if (auth.user?.isLoggedIn) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
  const auth = useAuth();
  if (auth.user?.isLoggedIn) {
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
            <PrivateRoute exact path="/" />
          </Switch>
        </div>
      </Router>
    </div>
  </AuthProvider>
);

export default App;
