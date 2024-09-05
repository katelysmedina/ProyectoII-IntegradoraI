import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css'; 
import logo from '../../Images/logo.png'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); 
    }
  };

  useEffect(() => {
    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <img src={logo} alt="Residencial Los Robles Logo" className="navbar-logo" />
      
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#registro-pagos">Gestión de cuotas</a></li>
        <li><a href="#directorio">Directorio</a></li>
        <li><a href="#encuestas">Encuestas</a></li>
        <li><a href="#videoconferencias">Reuniones virtuales</a></li>
      </ul>

      <ul className="navbar-icons">
        <li><a href='#emergencia'><svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="20px"
      width="20px"
      >
      <path d="M6 6.9L3.87 4.78l1.41-1.41L7.4 5.5 6 6.9M13 1v3h-2V1h2m7.13 3.78L18 6.9l-1.4-1.4 2.12-2.13 1.41 1.41M4.5 10.5v2h-3v-2h3m15 0h3v2h-3v-2M6 20h12a2 2 0 012 2H4a2 2 0 012-2m6-15a6 6 0 016 6v8H6v-8a6 6 0 016-6z" />
      </svg></a></li>
        <li><a href="#notificaciones"><i className="fa-solid fa-bell"></i></a></li>        
        <li><a href="#chat"><i className="fa-solid fa-comments"></i></a></li>        
        <li><a href="#inicio-sesion"><i className="fas fa-user"></i></a></li>
        
      </ul>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#registro-pagos">Gestión de cuotas</a></li>
          <li><a href="#directorio">Directorio</a></li>
          <li><a href="#encuestas">Encuestas</a></li>
          <li><a href="#videoconferencias">Reuniones virtuales</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

