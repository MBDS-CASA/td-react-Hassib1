import React from 'react';

const Menu = () => {
    // Fonction pour afficher une alerte avec le texte de l'élément cliqué
    const handleClick = (text) => {
        alert(`Vous avez cliqué sur : ${text}`);
    };

    return (
        <nav style={styles.navbar}>
            <ul style={styles.menu}>
                <li style={styles.menuItem}><a href="#home" style={styles.link} onClick={() => handleClick('Accueil')}>Accueil</a></li>
                <li style={styles.menuItem}><a href="#about" style={styles.link} onClick={() => handleClick('À propos')}>À propos</a></li>
                <li style={styles.menuItem}><a href="#services" style={styles.link} onClick={() => handleClick('Services')}>Services</a></li>
                <li style={styles.menuItem}><a href="#contact" style={styles.link} onClick={() => handleClick('Contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '250px',
        height: '100%',
        backgroundColor: '#333',
        padding: '20px 0',
        boxShadow: '4px 0 6px rgba(0, 0, 0, 0.1)',
    },
    menu: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    menuItem: {
        marginBottom: '20px',
        color: 'white',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'color 0.3s',
    },
};

export default Menu;
