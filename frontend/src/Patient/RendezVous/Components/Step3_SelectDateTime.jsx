// src/Patient/RendezVous/Components/Step3_SelectDateTime.jsx
import React, { useState, useEffect } from 'react';
import mockAvailabilities from '../Data/availabilitiesData'; // Importer les disponibilités

const Step3_SelectDateTime = ({ nextStep, prevStep, formData }) => {
  const [selectedDate, setSelectedDate] = useState(formData.date || '');
  const [selectedTime, setSelectedTime] = useState(formData.time || '');
  const [availableSlotsForSelectedDate, setAvailableSlotsForSelectedDate] = useState([]);

  // Met à jour les créneaux disponibles lorsque la date sélectionnée change
  useEffect(() => {
    if (selectedDate) {
      const dayAvailability = mockAvailabilities.find(
        (availability) => availability.date === selectedDate
      );
      setAvailableSlotsForSelectedDate(dayAvailability ? dayAvailability.slots : []);
    } else {
      setAvailableSlotsForSelectedDate([]);
    }
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime(''); // Réinitialise l'heure si la date change
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Veuillez sélectionner une date et une heure.');
      return;
    }
    nextStep({ date: selectedDate, time: selectedTime });
  };

  return (
    <form onSubmit={handleNext} className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Étape 3 : Choisir la Date et l'Heure
      </h2>
      <p className="text-gray-600 mb-4">
        Médecin sélectionné : <span className="font-bold text-blue-700">{formData.doctor?.name || 'N/A'}</span> (Spécialité : <span className="font-bold text-blue-700">{formData.doctor?.specialty || 'N/A'}</span>)
      </p>

      <div>
        <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
          Sélectionnez une Date :
        </label>
        <select
          id="appointmentDate"
          name="appointmentDate"
          value={selectedDate}
          onChange={handleDateChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
          required
        >
          <option value="">-- Choisissez une date --</option>
          {mockAvailabilities.map((availability) => (
            <option key={availability.date} value={availability.date}>
              {new Date(availability.date).toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </option>
          ))}
        </select>
      </div>

      {selectedDate && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
            Sélectionnez un Créneau Horaire pour le {new Date(selectedDate).toLocaleDateString('fr-FR')} :
          </label>
          {availableSlotsForSelectedDate.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {availableSlotsForSelectedDate.map((slot) => (
                <button
                  key={slot}
                  type="button" // Important pour ne pas soumettre le formulaire
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition duration-200 ease-in-out
                    ${selectedTime === slot
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-red-600 text-sm">
              Aucun créneau disponible pour cette date.
            </p>
          )}
        </div>
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
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Suivant
        </button>
      </div>
    </form>
  );
};

export default Step3_SelectDateTime;