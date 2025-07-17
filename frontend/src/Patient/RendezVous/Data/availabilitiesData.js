// src/Patient/RendezVous/Data/availabilitiesData.js

const generateAvailabilities = (startDate, numDays = 7) => {
  const availabilities = [];
  let currentDate = new Date(startDate);

  for (let i = 0; i < numDays; i++) {
    const dateString = currentDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
    const dayOfWeek = currentDate.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi

    let slots = [];
    if (dayOfWeek === 0 || dayOfWeek === 6) { // Week-end (Dimanche ou Samedi)
      slots = ['09:00', '10:00', '11:00', '14:00', '15:00'];
    } else { // Jours de semaine
      slots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
    }

    availabilities.push({
      date: dateString,
      slots: slots,
    });
    currentDate.setDate(currentDate.getDate() + 1); // Passe au jour suivant
  }
  return availabilities;
};

// Générer les disponibilités à partir de demain
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // Démarre la génération à partir de demain

const mockAvailabilities = generateAvailabilities(tomorrow, 10); // Génère pour les 10 prochains jours

export default mockAvailabilities;