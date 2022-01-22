import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import "./assets/fonts/airbnb-cereal-app-cufonfonts-webfont/style.css";

import { PrivateRoute } from './helpers/PrivateRoute';
import { Welcome, SignUp, Login, Home, ComingSoon, ForgotPassword, ConfirmationPage, Application, NotFound, Dashboard } from "./pages"


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/coming-soon">
          <ComingSoon />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/application">
          <Application />
        </Route>
        <Route path="/confirmation">
          <ConfirmationPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
