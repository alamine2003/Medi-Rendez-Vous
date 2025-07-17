// src/Patient/RendezVous/Pages/AppointmentBookingPage.jsx
import React, { useState } from 'react';
import Header from '../../../Accueil/Components/Header';
import Footer from '../../../Accueil/Components/Footer';

// Importer les composants pour chaque étape (nous les créerons juste après)
import Step1_SearchDoctor from '../Components/Step1_SearchDoctor';
import Step2_SelectDoctor from '../Components/Step2_SelectDoctor';
import Step3_SelectDateTime from '../Components/Step3_SelectDateTime';
import Step4_ConfirmAppointment from '../Components/Step4_ConfirmAppointment';

const AppointmentBookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1); // État pour l'étape actuelle
  const [formData, setFormData] = useState({        // État pour les données du formulaire
    specialty: '',
    doctor: null,
    date: null,
    time: null,
    // Ajoutez d'autres champs au fur et à mesure
  });

  // Fonction pour passer à l'étape suivante
  const nextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data })); // Fusionne les nouvelles données
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Fonction pour soumettre le formulaire final (sera implémentée plus tard)
  const handleSubmit = () => {
    console.log('Formulaire de rendez-vous soumis :', formData);
    alert('Rendez-vous pris avec succès (simulation) !');
    // Ici, vous enverriez les données au backend
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_SearchDoctor nextStep={nextStep} formData={formData} />;
      case 2:
        return <Step2_SelectDoctor nextStep={nextStep} prevStep={prevStep} formData={formData} />;
      case 3:
        return <Step3_SelectDateTime nextStep={nextStep} prevStep={prevStep} formData={formData} />;
      case 4:
        return <Step4_ConfirmAppointment nextStep={handleSubmit} prevStep={prevStep} formData={formData} />;
      default:
        return <Step1_SearchDoctor nextStep={nextStep} formData={formData} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-10">
          Prendre un Nouveau Rendez-vous
        </h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          {/* Indicateur de progression (optionnel mais utile) */}
          <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-gray-500">
              <span className={currentStep === 1 ? "text-green-600" : ""}>1. Spécialité/Médecin</span>
              <span className={currentStep === 2 ? "text-green-600" : ""}>2. Choisir le Médecin</span>
              <span className={currentStep === 3 ? "text-green-600" : ""}>3. Date et Heure</span>
              <span className={currentStep === 4 ? "text-green-600" : ""}>4. Confirmation</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Rendu de l'étape actuelle */}
          {renderStep()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentBookingPage;