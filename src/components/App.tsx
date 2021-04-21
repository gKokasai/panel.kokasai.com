import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from '../contexts/UserContext';
import './App.scss';

const App = (): JSX.Element => (
  <AuthProvider>
    <div className="app">
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  </AuthProvider>
);

export default App;
