import React from 'react';

const Footer= () => {
    // Récupérer la date et l'heure actuelles
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
  

    return (
        <footer style={{ backgroundColor: 'white', color: 'black', textAlign: 'center',  }}>
         
            <p>{year} - Safaa Hassib, Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;

