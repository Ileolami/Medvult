import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom"

import PRegister from './components/PatientsRegister';
import SignIn from './components/PatientsSign';
import DoctorRegister from './components/DoctorRegister';
import DoctorSign from './components/DoctorSign';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PRegister/>} />
        <Route path="/patientregister" element={<PRegister/>} />
        <Route path="/signinpatient" element={<SignIn />} />
        <Route path="/doctorregister" element={<DoctorRegister />} />
        <Route path="/signindoctor" element={<DoctorSign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;