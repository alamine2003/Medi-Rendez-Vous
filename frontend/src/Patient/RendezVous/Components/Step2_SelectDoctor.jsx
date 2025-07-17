// src/Patient/RendezVous/Components/Step2_SelectDoctor.jsx
import React, { useState, useEffect } from 'react';
import doctorsData from '../Data/doctorsData'; // Importer les données des médecins

const Step2_SelectDoctor = ({ nextStep, prevStep, formData }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(formData.doctor || null);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    // Filtrer les médecins en fonction de la spécialité choisie à l'étape 1
    if (formData.specialty) {
      const doctorsBySpecialty = doctorsData.filter(
        (doc) => doc.specialty === formData.specialty
      );
      setFilteredDoctors(doctorsBySpecialty);
    } else {
      // Si aucune spécialité n'est choisie, afficher tous les médecins (ou gérer autrement)
      setFilteredDoctors(doctorsData);
    }
  }, [formData.specialty]); // Re-filtrer si la spécialité change

  const handleNext = () => {
    if (!selectedDoctor) {
      alert('Veuillez sélectionner un médecin pour continuer.');
      return;
    }
    nextStep({ doctor: selectedDoctor });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Étape 2 : Sélectionner un Médecin
      </h2>

      {formData.specialty && (
        <p className="text-gray-600 mb-4">
          Médecins pour la spécialité : <span className="font-bold text-blue-700">{formData.specialty}</span>
        </p>
      )}

      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out
                ${selectedDoctor && selectedDoctor.id === doctor.id
                  ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-400 hover:shadow-sm'
                }`}
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="flex items-center">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-gray-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500">{doctor.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center py-8">
          Aucun médecin trouvé pour cette spécialité.
        </p>
      )}

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
          onClick={handleNext}
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Step2_SelectDoctor;