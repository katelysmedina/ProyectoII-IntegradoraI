import React from 'react';
import './footer.css'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Residencial Los Robles</h2>
          <p>Tu hogar, nuestra prioridad. Ofrecemos un ambiente seguro y cómodo para todos nuestros residentes.</p>
        </div>
        
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#registro-pagos">Gestión de cuotas</a></li>
            <li><a href="#directorio">Directorio</a></li>
            <li><a href="#encuestas">Encuestas</a></li>
            <li><a href="#videoconferencias">Reuniones virtuales</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p><strong>Teléfono:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contacto@residencialrosrobles.com</p>
          <p><strong>Dirección:</strong> Calle Los Robles 123, Zapopan, Jalisco</p>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Residencial Los Robles. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
