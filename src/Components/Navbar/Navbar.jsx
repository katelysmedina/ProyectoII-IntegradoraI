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
      setIsMenuOpen(false); // Cerrar menú 
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

