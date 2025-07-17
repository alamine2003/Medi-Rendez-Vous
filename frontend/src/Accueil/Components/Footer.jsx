import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MedAppoint. Tous droits réservés.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">Politique de Confidentialité</Link>
          <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition duration-300">Conditions d'Utilisation</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;