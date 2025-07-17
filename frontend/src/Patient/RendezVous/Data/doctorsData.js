// src/Patient/RendezVous/Data/doctorsData.js

const doctors = [
  {
    id: 'doc1',
    name: 'Dr. Jean Dupont',
    specialty: 'Généraliste',
    location: 'Centre Médical Ville',
    imageUrl: '/images/doc1.jpeg', // <-- Notez le '/' au début, chemin absolu depuis 'public'
  },
  {
    id: 'doc2',
    name: 'Dr. Marie Curie',
    specialty: 'Cardiologue',
    location: 'Hôpital Central',
    imageUrl: '/images/doc2.jpeg',
  },
  {
    id: 'doc3',
    name: 'Dr. Pierre Dubois',
    specialty: 'Dermatologue',
    location: 'Clinique Esthétique',
    imageUrl: '/images/doc3.jpeg',
  },
  {
    id: 'doc4',
    name: 'Dr. Sophie Martin',
    specialty: 'Pédiatre',
    location: 'Cabinet Enfance',
    imageUrl: '/images/doc4.jpeg',
  },
  {
    id: 'doc5',
    name: 'Dr. Lucas Bernard',
    specialty: 'Généraliste',
    location: 'Maison de Santé',
    imageUrl: '/images/doc5.jpeg',
  },
  {
    id: 'doc6',
    name: 'Dr. Clara Lefevre',
    specialty: 'Dentiste',
    location: 'Cabinet Dentaire Sourire',
    imageUrl: '/images/doc6.jpeg',
  },
  {
    id: 'doc7',
    name: 'Dr. Antoine Garcia',
    specialty: 'Cardiologue',
    location: 'Clinique du Coeur',
    imageUrl: '/images/doc7.jpeg',
  },
];

export default doctors;