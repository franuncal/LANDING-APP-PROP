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
  )}`; // Reemplaza "1234567890" con tu número de teléfono

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={imgLogo} alt="Logo" className="logo" />
      </div>

      {/* Botón de menú hamburguesa */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Menú de navegación */}
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

        {/* Íconos de redes sociales (versión móvil) */}
        <div className="navbar-icons-mobile">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp social-icon"></i>
          </a>
          <a
            href="https://instagram.com/miempresa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram social-icon"></i>
          </a>
        </div>
      </div>

      {/* Íconos en desktop */}
      <div className="navbar-icons">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp social-icon"></i>
        </a>
        <a
          href="https://instagram.com/miempresa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram social-icon"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
