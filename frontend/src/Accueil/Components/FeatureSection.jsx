import React from 'react';
// Assurez-vous d'avoir installé react-icons: npm install react-icons
import { FaUserMd, FaCalendarCheck, FaLaptopMedical, FaShieldAlt } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 border border-gray-100">
    <div className="text-blue-500 text-5xl mb-4 flex justify-center">{icon}</div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Pourquoi Choisir MedAppoint ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaCalendarCheck />}
            title="Prise de Rendez-vous Simplifiée"
            description="Planifiez vos consultations en quelques secondes, 24h/24 et 7j/7, depuis n'importe quel appareil."
          />
          <FeatureCard
            icon={<FaUserMd />}
            title="Large Choix de Spécialistes"
            description="Accédez à un vaste réseau de professionnels de santé qualifiés par spécialité, localisation et disponibilité."
          />
          <FeatureCard
            icon={<FaLaptopMedical />}
            title="Gestion Centralisée"
            description="Consultez et gérez vos rendez-vous passés et à venir, recevez des rappels et annulez ou reprogrammez facilement."
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Sécurité des Données"
            description="Vos informations médicales et personnelles sont protégées avec des technologies de cryptage avancées."
          />
           <FeatureCard
            icon={<FaCalendarCheck />}
            title="Accessibilité & Confort"
            description="Prenez rendez-vous de chez vous, sans file d'attente ni attente téléphonique."
          />
          <FeatureCard
            icon={<FaUserMd />}
            title="Profils Détaillés des Médecins"
            description="Consultez les qualifications, les avis des patients et les informations clés de chaque médecin."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;