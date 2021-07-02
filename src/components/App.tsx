import React, { FC } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Document from "./pages/document/Document";
import { AuthProvider, checkSession, useAuth } from "../contexts/AuthContext";
import { Pages } from "../pages";
import Empty from "./pages/Empty";
import LoginFormLoading from "./organisms/login/LoginFormLoading";
import Group from "./pages/group/Group";
import { getSessionId } from "../storage";
import GroupName from "./pages/group/GroupName";
import GroupNameForm from "./pages/group/GroupNameForm";
import GroupNameFormName from "./pages/group/GroupNameFormName";
import NotFound from "./pages/NotFound";
import { AlertProvider } from "../contexts/AlertContext";
import DocumentName from "./pages/document/DocumentName";
import GroupNameMember from "./pages/group/GroupNameMember";
import Form from "./pages/Form";

type UseAuthRouteProps = {
  authResponse: JSX.Element;
  unAuthResponse: JSX.Element;
};

const UseAuthRoute: FC<UseAuthRouteProps> = (props) => {
  const { authResponse, unAuthResponse } = props;
  const auth = useAuth();
  if (!auth.user && !auth.request.isFailSessionLogin) {
    checkSession(auth);
    if (getSessionId() != null) return <Empty />;
    return <LoginFormLoading />;
  }
  if (auth.user) {
    return authResponse;
  }
  return unAuthResponse;
};

const AuthRoute: FC<RouteProps> = (props) => (
  <UseAuthRoute
    authResponse={<Route {...props} />} // eslint-disable-line react/jsx-props-no-spreading
    unAuthResponse={<Redirect to={Pages.login.href} />}
  />
);

const UnAuthRoute: FC<RouteProps> = (props) => (
  <UseAuthRoute
    authResponse={<Redirect to={Pages.index.href} />}
    unAuthResponse={<Route {...props} />} // eslint-disable-line react/jsx-props-no-spreading
  />
);

const Provider: FC = (props): JSX.Element => {
  const { children } = props;
  return (
    <AlertProvider>
      <AuthProvider>{children}</AuthProvider>
    </AlertProvider>
  );
};

const App = (): JSX.Element => (
  <Provider>
    <div className="app">
      <BrowserRouter>
        <div>
          <Switch>
            <UnAuthRoute exact path={Pages.login.href} component={Login} />
            <AuthRoute exact path={Pages.index.href} component={Index} />
            <AuthRoute exact path={Pages.document.href} component={Document} />
            <AuthRoute exact path={Pages.form.href} component={Form} />
            <AuthRoute
              exact
              path={Pages.documentName.href}
              component={DocumentName}
            />
            <AuthRoute exact path={Pages.group.href} component={Group} />
            <AuthRoute
              exact
              path={Pages.groupName.href(":groupName")}
              component={GroupName}
            />
            <AuthRoute
              exact
              path={Pages.groupNameMember.href(":groupName")}
              component={GroupNameMember}
            />
            <AuthRoute
              exact
              path={Pages.groupNameForm.href(":groupName")}
              component={GroupNameForm}
            />
            <AuthRoute
              exact
              path={Pages.groupNameFormName.href(":groupName", ":formName")}
              component={GroupNameFormName}
            />
            <AuthRoute exact component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
