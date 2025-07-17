// src/Patient/RendezVous/Components/Step4_ConfirmAppointment.jsx
import React from 'react';

const Step4_ConfirmAppointment = ({ nextStep, prevStep, formData }) => {
  const { specialty, doctor, date, time } = formData; // Destructuration des données

  const handleConfirm = () => {
    // nextStep ici est en fait handleSubmit de AppointmentBookingPage
    nextStep();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Étape 4 : Confirmer Votre Rendez-vous
      </h2>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Détails du Rendez-vous :</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Spécialité :</span> {specialty || 'Non sélectionnée'}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Médecin :</span> {doctor?.name || 'Non sélectionné'}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Date :</span> {date || 'Non sélectionnée'}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Heure :</span> {time || 'Non sélectionnée'}
        </p>
        <p className="text-red-500 text-sm mt-4">
          Veuillez noter que ceci est une simulation. Aucune donnée n'est envoyée pour l'instant.
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Précédent
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Confirmer le Rendez-vous
        </button>
      </div>
    </div>
  );
};

export default Step4_ConfirmAppointment;