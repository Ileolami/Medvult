import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/PatientsRegister';
import SignIn from './components/PatientsSign';

const App = () => {
  return (
    <HomePage/>
    
  );
  
};

export default App;