import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css"; // Importar Font Awesome
import imgLogo from "../../assets/logos/logo1.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enlace de WhatsApp con mensaje predefinido
  const whatsappMessage = `¡Hola! Estoy interesado/a en obtener más información sobre sus propiedades de alquiler.`;
  const whatsappLink = `https://wa.me/5492945649282?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={imgLogo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>

        {/* Menú */}
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>
                Nosotros
              </Link>
            </li>
          </ul>
          <div className="navbar-icons-mobile">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp social-icon"></i>
            </a>
          </div>
        </div>

        {/* Íconos en desktop */}
        <div className="navbar-icons">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp social-icon"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
