// src/components/Banner/Banner.jsx
import "./Banner.css";

const Banner = () => {
  const whatsappLink = `https://wa.me/5492945649282?text=¡Hola!%20Estoy%20interesado/a%20en%20obtener%20más%20información%20sobre%20las%20propiedades%20disponibles%20para%20alquilar%20en%20Esquel%20y%20Trevelin."
  `;

  return (
    <div className="banner">
      <h1>Hola! Soy Agus</h1>
      <p>
        En este sitio encontrarás todo lo que necesitas para alquilar la casa
        perfecta para tus vacaciones. <br /> Me especializo en opciones de
        alquiler temporario en la ciudad Esquel y Trevelin cuidando cada detalle
        para que disfrutes de una estancia cómoda e inolvidable en nuestra amada
        Patagonia!
      </p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button>Contáctame</button>
      </a>
    </div>
  );
};

export default Banner;
