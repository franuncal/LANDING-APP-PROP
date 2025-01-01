import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Alquileres Temporales | Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
