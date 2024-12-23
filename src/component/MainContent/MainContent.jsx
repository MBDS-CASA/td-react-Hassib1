import React from 'react';

const MainContent = () => {
    // Récupérer la date et l'heure actuelles
    const currentDate = new Date();
    const day = currentDate.toLocaleString('fr-FR', { weekday: 'long' }); // Jour de la semaine
    const month = currentDate.toLocaleString('fr-FR', { month: 'long' }); // Mois
    const year = currentDate.getFullYear(); // Année
    const hours = currentDate.getHours().toString().padStart(2, '0'); // Heure
    const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Minutes
    const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Secondes

    return (
      
            <p>Bonjour, on est le {day}, {month}, {year} et il est {hours}:{minutes}:{seconds}</p>
       
    );
};

export default MainContent;
