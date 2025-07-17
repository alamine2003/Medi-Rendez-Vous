// src/Patient/RendezVous/Components/Step1_SearchDoctor.jsx
import React, { useState } from 'react';

const Step1_SearchDoctor = ({ nextStep, formData }) => {
  const [specialty, setSpecialty] = useState(formData.specialty || '');
  const [searchQuery, setSearchQuery] = useState(''); // Pour une future recherche par nom

  const handleNext = (e) => {
    e.preventDefault();
    // Ici, vous pourriez valider la spécialité ou la requête de recherche
    nextStep({ specialty }); // Passe la spécialité à l'étape suivante
  };

  return (
    <form onSubmit={handleNext} className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Étape 1 : Choisir une Spécialité ou Rechercher
      </h2>

      <div>
        <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
          Sélectionnez une Spécialité Médicale :
        </label>
        <select
          id="specialty"
          name="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
        >
          <option value="">-- Sélectionnez --</option>
          <option value="Generaliste">Généraliste</option>
          <option value="Cardiologue">Cardiologue</option>
          <option value="Dermatologue">Dermatologue</option>
          <option value="Pediatre">Pédiatre</option>
          <option value="Dentiste">Dentiste</option>
          {/* Ajoutez d'autres spécialités ici */}
        </select>
      </div>

      <div className="text-center text-gray-500">
        — OU —
      </div>

      <div>
        <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700 mb-2">
          Rechercher par Nom de Médecin :
        </label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Ex: Dr. Dupont"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Suivant
        </button>
      </div>
    </form>
  );
};

export default Step1_SearchDoctor;