import logo from './assets/logo.png'; 
import enchereImg from './assets/enchere.jpg'; 
import './App.css';
import  {Amplify, API } from "aws-amplify";
import React, {useEffect, useState} from 'react';
import { withAuthenticator, AmplifySignOut} from  '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function App() {
  return(
        <div className="App">
          <header className="App-header">
            <img className ='logo' src={logo} alt="Logo" />
      
            <h1 className='Titre'> Auction </h1>
          </header>
          <main className="App-body">
            <div>
            <div className='Text-et-boutons'>
          <div className="Body-text">
              <h2>Vendez au plus offrant, achetez au moins disant.</h2>
            </div>
            <div className="Button-group">
              <button className="Button">Créer une enchère</button>
              <button className="Button secondary">Participer à une enchère</button>
            </div>
          </div>
            </div>
          
          <img src={enchereImg} alt="Enchère" className="Body-image" />
          </main>
        </div>
      );
    }


export default withAuthenticator(App);
