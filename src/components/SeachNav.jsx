import React from 'react';
import './seachnav.css';
import { useNavigate } from 'react-router-dom';

const SeachNav = () => {
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const handleSearchClick = () => {
    navigate('/'); // Navega para a página Search.jsx
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <button className="navbar-button logo-button">
          <img src="https://i.pinimg.com/originals/be/18/8b/be188b13b1219d11e68d0006beb12547.png" alt="Logo" className="logo-image" />
        </button>
      </div>
      <div>
        <h1 className='TituloMeio'>Search for character </h1>
      </div>
      <div className="navbar-search">
        <button className="navbar-button search-button" onClick={handleSearchClick}>
          <h4>Consuming API</h4>
        </button>
      </div>
    </nav>
  );
};

export default SeachNav;