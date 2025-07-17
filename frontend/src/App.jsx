import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Accueil/Pages/HomePage'; // Importez votre page d'accueil

// Les imports pour les futures pages de connexion/inscription/tableaux de bord
// ne sont pas nécessaires tant que ces pages ne sont pas créées.
// import LoginPage from './Auth/Pages/LoginPage';
// import RegisterPage from './Auth/Pages/RegisterPage';
// import PatientDashboard from './Patient/Pages/PatientDashboard';
// import DoctorDashboard from './Doctor/Pages/DoctorDashboard';
// import AdminDashboard from './Admin/Pages/AdminDashboard';
// import NotFoundPage from './Shared/Pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* La route principale qui pointe vers votre HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Laissez les commentaires pour les futures routes, on les ajoutera plus tard */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/patient/dashboard" element={<PatientDashboard />} /> */}
        {/* <Route path="/doctor/dashboard" element={<DoctorDashboard />} /> */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;