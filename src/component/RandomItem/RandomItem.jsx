import React, { useState } from 'react';
import data from '../../../data.json'; // Assurez-vous que le chemin est correct

const RandomItem = () => {
    const [randomItem, setRandomItem] = useState(null);

    // Fonction pour tirer un élément aléatoire
    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * data.length); // Génère un index aléatoire
        setRandomItem(data[randomIndex]); // Définit l'élément tiré
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Item Aléatoire</h1>
            <button onClick={getRandomItem} style={{ padding: '10px', cursor: 'pointer' }}>
                Tirer un item
            </button>
            {randomItem && (
                <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                    <h2>Informations de l'Item</h2>
                    <p><strong>ID unique:</strong> {randomItem.unique_id}</p>
                    <p><strong>Course:</strong> {randomItem.course}</p>
                    <p>
                        <strong>Étudiant:</strong> {randomItem.student.firstname} {randomItem.student.lastname} 
                        (ID: {randomItem.student.id})
                    </p>
                    <p><strong>Date:</strong> {randomItem.date}</p>
                    <p><strong>Note:</strong> {randomItem.grade}</p>
                </div>
            )}
        </div>
    );
};

export default RandomItem;
