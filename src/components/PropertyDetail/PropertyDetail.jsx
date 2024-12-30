import { useState } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../../data/properties";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === parseInt(id));

  const [arrivalDate, setArrivalDate] = useState(""); // Fecha de ingreso
  const [departureDate, setDepartureDate] = useState(""); // Fecha de salida

  if (!property) {
    return <p>Propiedad no encontrada</p>;
  }

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Generar el mensaje de WhatsApp con las fechas seleccionadas
  const whatsappMessage = `Hola, estoy interesado en alquilar la propiedad "${
    property.title
  }" 
  desde el ${arrivalDate || "___"} hasta el ${
    departureDate || "___"
  }. Esta disponible?`;

  // Crear el enlace de WhatsApp con el mensaje
  const whatsappUrl = `https://wa.me/5492945649282?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="property-detail">
      <h1>{property.title}</h1>
      {/* Carrusel */}
      <div className="carousel-container">
        <Slider {...settings}>
          {property.images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`${property.title} - ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <p>{property.description}</p>
      <p>
        Tarifa por Noche: <strong>{property.price}</strong>
      </p>
      <p>Ubicación: {property.location}</p>
      <p>
        Huspedes: <strong>{property.passengers}</strong>
      </p>{" "}
      <a
        href={property.googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Ubicación
      </a>
      {/* Formulario de fechas */}
      <div className="date-container">
        <div className="date-field">
          <label htmlFor="arrival-date">Llegada</label>
          <input
            type="date"
            id="arrival-date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          />
        </div>
        <div className="date-field">
          <label htmlFor="departure-date">Salida</label>
          <input
            type="date"
            id="departure-date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
      </div>
      {/* Enlace de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        Reservar por WhatsApp
      </a>
      <p>No te cobramos cargos hasta concretar la reserva</p>
    </div>
  );
};

export default PropertyDetail;
