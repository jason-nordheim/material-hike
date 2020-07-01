import React from 'react'
import MobileLayout from './layout/mobileLayout';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUpPage from '../pages/signup'
import LoginPage from '../pages/login'

const App = () => {
  return (
    <Router>
       <SignUpPage />
    </Router>
  );
}

export default App    