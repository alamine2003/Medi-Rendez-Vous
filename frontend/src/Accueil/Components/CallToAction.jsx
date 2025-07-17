import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à simplifier votre gestion de rendez-vous ?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Que vous soyez patient, médecin ou administrateur, rejoignez MedAppoint dès aujourd'hui pour une expérience fluide et efficace.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-xl"
        >
          Démarrer Maintenant
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;