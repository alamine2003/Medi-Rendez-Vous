// src/Patient/Pages/PatientPortal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Accueil/Components/Header';
import Footer from '../../Accueil/Components/Footer';

const PatientPortal = () => {
  const isAuthenticated = false;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8">
          Espace Patient
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-12">
          Bienvenue dans votre espace dédié. Choisissez une option pour gérer vos rendez-vous médicaux.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Prendre un nouveau rendez-vous
            </h2>
            <p className="text-gray-600 mb-6">
              Trouvez et réservez facilement votre prochaine consultation avec un spécialiste.
            </p>
            {/* <-- Modifié pour pointer vers la nouvelle page de prise de RDV */}
            <Link
              to="/appointment/new"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg"
            >
              Prendre rendez-vous
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mon Tableau de Bord Patient
            </h2>
            <p className="text-gray-600 mb-6">
              Consultez l'historique de vos rendez-vous, gérez votre profil et plus encore.
            </p>
            {isAuthenticated ? (
              <Link
                to="/patient/dashboard"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Accéder au Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg"
              >
                Se connecter pour accéder
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PatientPortal;