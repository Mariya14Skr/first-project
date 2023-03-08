import React from 'react';
import './App.css';
import SignIn from './components/sign_in/sign_in';
import SignUp from './components/sign_up/sign_up';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

const Middleware = ({component}) => {
  return (
    <>
      <header >
        <Link to="/sign-up"></Link>
        <Link to="/sign-in"></Link>
      </header>
      {component}
    </>
  )
}

const App = () => {
  return (
  <div className="container">
    <Routes >
      <Route path="/sign-in" element={<Middleware component={<SignIn />} />} />
      <Route path="/sign-up" element={<Middleware component={<SignUp />} />} />
    </Routes>
  </div>
  )
}
export default App;
