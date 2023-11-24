import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom"

import HomePage from './components/PatientsRegister';
import SignIn from './components/PatientsSign';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;