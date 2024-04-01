import React from 'react';
import enchere from '../assets/enchere-immobiliere.jpg'
import '../App.css'; 

function Accueil() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Auction</h1>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h2>Vendez au plus offrant</h2>
          <img className = "phone-image" src={enchere} alt = "enchere" />
          <button className="cta-button"> Se connecter </button>
        </section>
      </main>
    </div>
  );
}

export default Accueil;
