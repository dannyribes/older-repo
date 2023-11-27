// src/App.js
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CreateNetworkForm from './components/CreateNetworkForm';
import './App.css';

library.add(faFacebook, faTwitter, faLinkedin, faInstagram);

// Header component
function Header() {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
      <img
        src="https://media.istockphoto.com/vectors/circles-logo-vector-id538773545?k=6&m=538773545&s=612x612&w=0&h=B-UHMqSyNau1SSDfGK1mTiPeSGlB8tfOA_m-TPL5fRo="
        alt="Logo"
        style={{ maxWidth: '100px', height: 'auto' }}
      />
      <h1>Build Private Ethereum Networks</h1>
    </header>
  );
}

// Footer component
function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
      <a href="/" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>
        Who are we
      </a>
      <a href="/" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>
        Privacy
      </a>
      <a href="/" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>
        Terms and Conditions
      </a>

      {/* Social Network Icons */}
      <div className="social-icons" style={{ marginTop: '10px', padding: '10px' }}>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

// Main App component
function App() {
  const handleNetworkCreated = (networkId) => {
    // Do something with the created network ID, e.g., update state, show a message, etc.
    console.log('Network Created:', networkId);
  };

  return (
    <div>
      <Header />

      {/* CreateNetworkForm component */}
      <CreateNetworkForm onNetworkCreated={handleNetworkCreated} />

      <Footer />
    </div>
  );
}

export default App;
