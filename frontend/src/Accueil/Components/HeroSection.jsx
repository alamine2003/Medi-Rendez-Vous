import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Vous pouvez ajouter une image de fond ou un motif ici si vous le souhaitez */}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-down">
          Simplifiez Vos Rendez-vous Médicaux
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto animate-fade-in-up">
          Prenez rendez-vous avec vos médecins en quelques clics, où que vous soyez, et gérez votre santé en toute simplicité.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-up-delay">
          <Link
            to="/register?role=patient" // Le paramètre `role` peut être utile pour la page d'inscription
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-xl"
          >
            Je suis Patient
          </Link>
          <Link
            to="/register?role=doctor"
            className="bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-900 transition duration-300 shadow-xl"
          >
            Je suis Docteur
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;