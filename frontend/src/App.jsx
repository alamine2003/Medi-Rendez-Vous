// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Accueil/Pages/HomePage';
import PatientPortal from './Patient/Pages/PatientPortal';
import AppointmentBookingPage from './Patient/RendezVous/Pages/AppointmentBookingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
        {/* Nouvelle route pour la prise de rendez-vous */}
        <Route path="/appointment/new" element={<AppointmentBookingPage />} />

        {/* Futures Routes (laissez-les en commentaire pour l'instant) */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/patient/dashboard" element={<PatientDashboardPage />} /> */}
        {/* <Route path="/doctor/dashboard" element={<DoctorDashboard />} /> */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;