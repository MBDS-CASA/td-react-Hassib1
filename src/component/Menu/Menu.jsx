import React, { useState } from "react";
import Notes from "../Notes/Notes";
import Etudiants from "../Etudiants/Etudiants";
import Matieres from "../Matieres/Matiere";
import Apropos from "../Apropos/Apropos";

const Menu = () => {
  // État pour suivre l'élément actif
  const [activeItem, setActiveItem] = useState("notes");

  // Fonction pour gérer le clic sur un élément du menu
  const handleMenuClick = (item) => {
    setActiveItem(item);
    // Ajouter une alerte pour afficher le nom de l'élément sélectionné
    alert(`Vous avez cliqué sur : ${item}`);
  };

  return (
    <div>
      <nav>
        <ul style={styles.menu}>
          <li
            style={activeItem === "notes" ? styles.activeMenuItem : styles.menuItem}
            onClick={() => handleMenuClick("notes")}
          >
            Notes
          </li>
          <li
            style={activeItem === "Etudiants" ? styles.activeMenuItem : styles.menuItem}
            onClick={() => handleMenuClick("Etudiants")}
          >
            Étudiants
          </li>
          <li
            style={activeItem === "Matieres" ? styles.activeMenuItem : styles.menuItem}
            onClick={() => handleMenuClick("Matieres")}
          >
            Matières
          </li>
          <li
            style={activeItem === "Apropos" ? styles.activeMenuItem : styles.menuItem}
            onClick={() => handleMenuClick("Apropos")}
          >
            À propos
          </li>
        </ul>
      </nav>
      <div style={styles.content}>
        {activeItem === "notes" && <Notes />}
        {activeItem === "Etudiants" && <Etudiants />}
        {activeItem === "Matieres" && <Matieres />}
        {activeItem === "Apropos" && <Apropos />}
      </div>
    </div>
  );
};

// Styles en objet JavaScript
const styles = {
  menu: {
    listStyle: "none",
    display: "flex",
    padding: 0,
    margin: 0,
    borderBottom: "2px solid #ccc",
  },
  menuItem: {
    marginRight: "20px",
    padding: "10px 15px",
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
  },
  activeMenuItem: {
    marginRight: "20px",
    padding: "10px 15px",
    cursor: "pointer",
    color: "blue",
    fontWeight: "bold",
    borderBottom: "2px solid blue",
  },
  content: {
    marginTop: "20px",
  },
};

export default Menu;
