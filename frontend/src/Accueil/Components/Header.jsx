import React from 'react';
import { Link } from 'react-router-dom'; // Nécessaire pour la navigation SPA

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">MedAppoint</Link> {/* Lien vers la page d'accueil */}
        </div>
        <div>
          <Link to="/login" className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Connexion</Link>
          <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">Inscription</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;