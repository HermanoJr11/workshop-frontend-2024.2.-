import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const handleSearchClick = () => {
    navigate('/search'); // Navega para a página Search.jsx
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <button className="navbar-button logo-button">
          <img src="https://i.pinimg.com/originals/be/18/8b/be188b13b1219d11e68d0006beb12547.png" alt="Logo" className="logo-image" />
        </button>
      </div>
      <div>
        <h1 className='TituloMeio'>Consuming API</h1>
      </div>
      <div className="navbar-search">
        <button className="navbar-button search-button" onClick={handleSearchClick}>
          <h4>Search for character</h4>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
