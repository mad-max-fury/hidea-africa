import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import "./assets/fonts/airbnb-cereal-app-cufonfonts-webfont/style.css";

// import { Home } from './pages/home/Home';
// import { ComingSoon } from './pages/comingsoon/ComingSoon';
// import { SignUp } from './pages/signup/Signup';
// import { Login } from './pages/login/Login';
// import { ForgotPassword } from './pages/forgotPassword/ForgotPassword';
// import { NotFound } from './pages/404page/NotFound';
// import { ConfirmationPage } from './pages/confirmation/ConfirmationPage';
// import { Application } from './pages/onboarding/Application';

<<<<<<< Updated upstream
=======
import { Dashboard, Welcome, SignUp, Login, Home, ComingSoon, NotFound, ForgotPassword, ConfirmationPage, Application } from "./pages"
>>>>>>> Stashed changes

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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
