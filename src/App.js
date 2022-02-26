import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "./assets/fonts/airbnb-cereal-app-cufonfonts-webfont/style.css";
import { Home } from './pages/home/Home';
import { ComingSoon } from './pages/comingsoon/ComingSoon';
import { SignUp } from './pages/signup/Signup';
import { Login } from './pages/login/Login';
import { ForgotPassword } from './pages/forgotPassword/ForgotPassword';
import { NotFound } from './pages/404page/NotFound';
import { ConfirmationPage } from './pages/confirmation/ConfirmationPage';
import { Dashboard , Welcome} from "./pages"
// import  ActiveIdeas  from './pages/dashboard/screens/ActiveIdeas'



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route exact path="/dashboard/:route" element={<Dashboard />} />
        <Route path="/dashboard/:route/:sub" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
